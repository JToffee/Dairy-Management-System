import View from "./View.js";

class Sales extends View {
	_parentElement = document.querySelector(".sales");

	_generateMarkUp() {
		return `
        <section class="thumbnails-container today-input">
				<div class="title--thumbnails">
					<h2><span>Summary</span></h2>
					<h5>2-3-2023</h5>
				</div>
				<div class="thumbnail">
					<p class="title--thumbnail">KCC</p>
					<p class="subValue-thumbnail">500 LITRES</p>
					<p class="value-thumbnail">500,000 KSH</p>
					<p>+ 10,000</p>
				</div>
				<div class="thumbnail">
					<p class="title--thumbnail">Cash Retail</p>
					<p class="subValue-thumbnail">500 LITRES</p>
					<p class="value-thumbnail">500,000 KSH</p>
					<p>+ 10,000</p>
				</div>
				<div class="thumbnail">
					<p class="title--thumbnail">Cash Wholesale</p>
					<p class="subValue-thumbnail">500 LITRES</p>
					<p class="value-thumbnail">500,000 KSH</p>
					<p>+ 10,000</p>
				</div>
				<div class="thumbnail thumbnail--active">
					<p class="title--thumbnail" class="title--thumbnail">Billed</p>
					<p class="subValue-thumbnail">500 LITRES</p>
					<p class="value-thumbnail">500,000 KSH</p>
					<p>+ 10,000</p>
				</div>
				<div class="thumbnail">
					<p class="title--thumbnail">Total</p>
					<p class="subValue-thumbnail">500 LITRES</p>
					<p class="value-thumbnail">500,000 KSH</p>
					<p>+ 10,000</p>
				</div>
			</section>
        `;
	}
}

export default new Sales();
