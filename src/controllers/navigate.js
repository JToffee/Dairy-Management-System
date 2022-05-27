import Sales from "../views/sales/Sales.js";
import InputProduce from "../views/produce/InputProduce.js";
import GeneralSummary from "../views/GeneralSummary.js";
import Navigation from "../views/ui/Navigation.js";
import Banner from "../views/ui/Banner.js";
import CowProduce from "../views/produce/CowProduce.js";
import CustomPeriod from "../views/ui/CustomPeriod.js";
import Produce from "../views/produce/Produce.js";

import { state } from "./controller.js";
import { showCowproduce, showSummary } from "./controller.js";

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
		Produce.render(state.produce);
		CowProduce.render(state.produce);
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
		Produce.render(state.produce, 7);
		CowProduce.render(state.produce, 7);
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
		Produce.render(state.produce, 30);
		CowProduce.render(state.produce, 30);
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

		InputProduce.render(state.cows);
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
