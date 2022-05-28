import View from "../View.js";
import { sum } from "../../util/sum.js";

export class Produce extends View {
	_parentElement = document.querySelector(".produce-summary");

	_generateMarkUp() {
		return `
        <section class="thumbnails-container today-input">
					<div class="title--thumbnails">
						<h2><span>Summary</span></h2>
						<h5>${new Date().toLocaleDateString()}</h5>
					</div>
					<div class="thumbnail">
						<p class="title--thumbnail">Morning</p>
						<p class="value-thumbnail">${sum(this.filterByDuration("morning"))} LITRES</p>
						<p  class = 'difference'>+ 10</p>
					</div>
					<div class="thumbnail">
						<p class="title--thumbnail">Noon</p>
						<p class="value-thumbnail">${sum(this.filterByDuration("noon"))} LITRES</p>
						<p  class = 'difference'>+ 10</p>
					</div>
					<div class="thumbnail ">
						<p class="title--thumbnail" class="title--thumbnail">Evening</p>
						<p class="value-thumbnail">${sum(this.filterByDuration("evening"))} LITRES</p>
						<p  class = 'difference'>+44</p>
					</div>
					<div class="thumbnail thumbnail--active" >
						<p class="title--thumbnail">Total</p>
						<p class="value-thumbnail">${sum(this._filterProduceSum())} LITRES</p>
						<p  class = 'difference'>${this.difference()}</p>
					</div>
				</section>
				
        `;
	}
}
export default new Produce();
