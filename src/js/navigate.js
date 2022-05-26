import Navigation from "./views/Navigation.js";
import Banner from "./views/Banner.js";
import Sales from "./views/Sales.js";
import InputProduce from "./views/InputProduce.js";
import Produce from "./views/Produce.js";
import GeneralSummary from "./views/GeneralSummary.js";
import CowProduce from "./views/CowProduce.js";
import { showCowproduce, showSummary } from "../controller.js";
import CustomPeriod from "./views/CustomPeriod.js";

//navigate
export const navigate = (id) => {
	// new View().clearContainer();
	Navigation.clear();
	Banner.clear();
	GeneralSummary.clear();
	Produce.clear();
	CowProduce.clear();
	InputProduce.clear();
	CustomPeriod.clear();

	if (id === "Produce" || id === "Today") {
		Navigation.render([
			"New",
			"Today",
			"Week",
			"Month",
			"Custom Period",
			"Graph",
			"Home",
			"Sales",
		]);
		CustomPeriod._removeSummaryFromTop();
		Produce.render();
		CowProduce.render();
		CowProduce.clickCowBtnHandler(showCowproduce);
	}
	if (id === "Home") showSummary();
	if (id === "Week") {
		Navigation.render([
			"New",
			"Today",
			"Week",
			"Month",
			"Custom Period",
			"Graph",
			"Home",
			"Sales",
		]);
		CustomPeriod._removeSummaryFromTop();
		Produce.render(undefined, 7);
		CowProduce.render(undefined, 7);
		CowProduce.clickCowBtnHandler(showCowproduce);
	}
	if (id === "Month") {
		Navigation.render([
			"New",
			"Today",
			"Week",
			"Month",
			"Custom Period",
			"Graph",
			"Home",
			"Sales",
		]);
		CustomPeriod._removeSummaryFromTop();
		Produce.render(undefined, 30);
		CowProduce.render(undefined, 30);
		CowProduce.clickCowBtnHandler(showCowproduce);
	}
	if (id === "Sales") {
		Navigation.render([
			"New Sale",
			"This week",
			"This month",
			"Custom Period",
			"Graph",
			"Home",
		]);
		Sales.render();
	}
	if (id === "New") {
		Navigation.render([
			"Today",
			"Week",
			"Month",
			"Custom Period",
			"Graph",
			"Home",
			"Sales",
		]);

		InputProduce.render();
	}
	if (id === "Custom Period") {
		Navigation.render([
			"New",
			"Today",
			"Week",
			"Month",
			"Custom Period",
			"Graph",
			"Home",
			"Sales",
		]);
		CustomPeriod._removeSummaryFromTop();
		CustomPeriod.render();
	}
};
