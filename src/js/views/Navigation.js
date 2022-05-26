import View from "./View.js";

class Navigation extends View {
	_parentElement = document.querySelector(".nav");
	_id;

	_generateMarkUp() {
		const markUp = this.links
			.map(
				(link) =>
					`<li><a href="#" class ='link ${
						this._id === link ? "linkActive" : ""
					}' id = '${link}'> ${link}</a></li>`
			)
			.join(" ");

		return `
        <ul>
            ${markUp}
           
        </ul>`;
	}

	//Linked clicked handler fx

	clickLinkHandler(handler) {
		this._parentElement.addEventListener("click", (e) => {
			if (e.target.classList.contains("link")) {
				const id = e.target.getAttribute("id");
				this._id = id;
				handler(id);
			}
		});
	}
}

export default new Navigation();
