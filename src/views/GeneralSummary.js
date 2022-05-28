import View from "./View.js";
import { sum } from "../util/sum.js";

class Summary extends View {
	_parentElement = document.querySelector(".thumbnails-container");

	_generateMarkUp() {
		// const difference = 8000;
		// const total = 9000;
		// let title;

		// if (data.paymentMode) title =
		return ` <div class="title--thumbnails">
            <h2>Toda<span>y's sum</span>mary</h2>
            <h5>${new Date().toLocaleDateString()}</h5>
        </div>
        <div class="thumbnail">
            <p class="title--thumbnail">Milk Produce  </p>
            <p class="value-thumbnail">${sum(
							this._filterProduceSum()
						)} LITRES</p>
            <p class = 'difference'> ${this.difference()}</p>
        </div>
        <div class="thumbnail">
            <P class="title--thumbnail">Sales Amount </P>
            <p class="value-thumbnail">500,000 KSH</p>
            <p  class = 'difference'>+ 10,000</p>
        </div>
        <div class="thumbnail thumbnail--active">
            <p class="title--thumbnail" class="title--thumbnail">Expenses</p>
            <p class="value-thumbnail">-100,000</p>
            <p  class = 'difference'>-5,000</p>
        </div>
        <div class="thumbnail">
            <p class="title--thumbnail">Profits</p>
            <p class="value-thumbnail">400,000 KSH</p>
            <p  class = 'difference'> - 50,000</p>
        </div>`;
	}
}

export default new Summary();
