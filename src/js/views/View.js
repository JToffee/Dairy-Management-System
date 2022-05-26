import { TOMILLISECS } from "../../constants/config.js";

export default class View {
	_data;
	_banner = document.querySelector(".banner");
	_header = document.querySelector(".header");
	_days;
	_startDate;
	_endDate;

	render(links = null, days = 0, startDate = null, endDate = null) {
		this._days = days;
		// this._data = data;
		this.links = links && links;
		this._startDate = startDate;
		this._endDate = endDate;

		const markUp = this._generateMarkUp();

		this._parentElement.style.display = "flex";
		this._parentElement.style.marginLeft = "auto";
		this._parentElement.style.marginRight = "auto";

		this._parentElement.insertAdjacentHTML("afterBegin", markUp);
	}

	update() {}
	clear() {
		this._parentElement.innerHTML = "";
		this._parentElement.style.display = "none";
		this._banner.innerHTML = "";
	}
	remove() {
		this._parentElement.remove();
		this._header.style.height = "15vh";
	}
	renderSpinner() {}
	renderError() {}
	renderSuccess() {}

	_setStartDate() {
		const milliseconds = this._days * TOMILLISECS;
		this._startDate =
			new Date(new Date().setHours(0, 0, 0, 0)).getTime() - milliseconds;
	}

	//Filter produce by dates and get the sum
	_filterProduceSum(data) {
		this._setStartDate();

		return (
			data &&
			data.filter(
				(item) =>
					item.date <= new Date().getTime() && item.date >= this._startDate
			)
		);
	}

	// filter produce by dates and milking time

	filterByDuration(time = null, data) {
		if (!this._startDate) this._startDate = this._setStartDate();
		if (!this._endDate) this._endDate = new Date().getTime();

		console.log(this._startDate, this._endDate);

		return (
			data &&
			data.filter(
				(item) =>
					item.time === time &&
					item.date <= this._endDate &&
					item.date >= this._startDate
			)
		);
	}
}
