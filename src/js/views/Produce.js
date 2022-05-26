import View from "./View.js";
import { produce } from "../../../data/produce.js";
import { sum } from "../../../util/sum.js";
import { cows } from "../../../data/cows.js";

export class Produce extends View {
	_parentElement = document.querySelector(".produce-summary");
	_produceSum = sum(produce);
	_produce = produce;

	_generateMarkUp() {
		return `
        <section class="thumbnails-container today-input">
					<div class="title--thumbnails">
						<h2><span>Summary</span></h2>
						<h5>${new Date().toLocaleDateString()}</h5>
					</div>
					<div class="thumbnail">
						<p class="title--thumbnail">Morning</p>
						<p class="value-thumbnail">${sum(
							this.filterByDuration("morning", this._produce)
						)} LITRES</p>
						<p>+ 10</p>
					</div>
					<div class="thumbnail">
						<p class="title--thumbnail">Noon</p>
						<p class="value-thumbnail">${sum(
							this.filterByDuration("noon", this._produce)
						)} LITRES</p>
						<p>+ 10</p>
					</div>
					<div class="thumbnail ">
						<p class="title--thumbnail" class="title--thumbnail">Evening</p>
						<p class="value-thumbnail">${sum(
							this.filterByDuration("evening", this._produce)
						)} LITRES</p>
						<p>+44</p>
					</div>
					<div class="thumbnail thumbnail--active" >
						<p class="title--thumbnail">Total</p>
						<p class="value-thumbnail">${sum(
							this._filterProduceSum(this._produce)
						)} LITRES</p>
						<p>+ 50</p>
					</div>
				</section>
				
        `;
	}
}
export default new Produce();
