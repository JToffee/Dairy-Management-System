import GeneralSummary from "../views/GeneralSummary.js";
import Navigation from "../views/ui/Navigation.js";
import Banner from "../views/ui/Banner.js";
import CowProduce from "../views/produce/CowProduce.js";
import { navigate } from "./navigate.js";
import CustomPeriod from "../views/ui/CustomPeriod.js";
import Produce from "../views/produce/Produce.js";

import * as model from "../models/model.js";
import InputProduce from "../views/produce/InputProduce.js";

export const state = model.state;

//Show general summary
export const showSummary = () => {
	Navigation.render(["Feeds", "Produce", "Sales", "Expenses", "Profits"]);
	Banner.render();
	GeneralSummary.render(state.produce);

	return;
};

// per cow btn click handler
export const showCowproduce = (id, days) => {
	CowProduce.clear();
	if (id === "allproduce") {
		CowProduce.showCowProduce(state.produce);
	} else {
		CowProduce.showCowProduce(model.filterBycow(id));
	}

	CowProduce.render(state.produce, days);
};

Navigation.clickLinkHandler(navigate);
showSummary();

//Search btn click handler
function perPeriodHandler(start, end) {
	const startDate = new Date(start).getTime();
	const endDate = new Date(end).getTime();

	if (startDate && endDate) {
		Produce.render(null, null, startDate, endDate);
		CustomPeriod._moveSearchToTop();
	}
}

CustomPeriod.submitHandler(perPeriodHandler);

// Input prodce handler

const inputProduceHandler = (formData, type) => {
	console.log(formData, type);

	model.save(formData, type);
};

InputProduce.submitHandler(inputProduceHandler);
