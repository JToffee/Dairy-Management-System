import View from "../View.js";

class Navigation extends View {
	_parentElement = document.querySelector(".nav");
	_id;
	_links;

	render(links) {
		this._links = links;
		const markUp = this._generateMarkUp();

		this._parentElement.style.display = "flex";
		this._parentElement.style.marginLeft = "auto";
		this._parentElement.style.marginRight = "auto";

		this._parentElement.insertAdjacentHTML("afterBegin", markUp);
	}
	_generateMarkUp() {
		const markUp = this._links
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
