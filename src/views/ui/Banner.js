import View from "../View.js";

class Banner extends View {
	_parentElement = document.querySelector(".banner");

	_generateMarkUp() {
		return ` 
    <div class="banner-content">
        <h1 class="company--name"> KAPORIA</h1>
        <h3>" Trust us to feed you" </h3>
    </div>
 `;
	}
}

export default new Banner();
