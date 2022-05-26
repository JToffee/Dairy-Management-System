import GeneralSummary from "./js/views/GeneralSummary.js";
import Navigation from "./js/views/Navigation.js";
import Banner from "./js/views/Banner.js";
import { produce } from "../../../data/produce.js";
import CowProduce from "./js/views/CowProduce.js";
import { navigate } from "./js/navigate.js";
import CustomPeriod from "./js/views/customPeriod.js";
import Produce from "./js/views/Produce.js";

//Show general summary
export const showSummary = () => {
	Navigation.render(["Feeds", "Produce", "Sales", "Expenses", "Profits"]);
	Banner.render();
	GeneralSummary.render();

	return;
};

// per cow btn click handler
export const showCowproduce = (id, days) => {
	CowProduce.clear();
	if (id === "allproduce") {
		CowProduce.showCowProduce(produce);
	} else {
		const cowProduce = produce.filter((produce) => produce.cowId === id);
		CowProduce.showCowProduce(cowProduce);
	}

	CowProduce.render(undefined, undefined, days);
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
