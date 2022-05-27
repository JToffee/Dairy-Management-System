import View from "../View.js";

class CustomPeriod extends View {
	_parentElement = document.querySelector(".custom-period");

	_generateMarkUp() {
		return `
        
            <form class="search">
                <div class="form-group">
                    <label for="startDate">Start date</label>    
                    <input type="date" id='startDate'>
                </div>
                <div class="form-group">
                    <label for="endDate">End date</label>  
                    <input type="date" id= 'endDate'>
                </div>
                <div class = 'form-group'>
                    <button type = 'submit' class ='btn'> <img src = '../../../assets/icons/search.png' class = 'icon'>  </button>
                </div>
            </form>
            <div class="results"> 
                
            </div>
        `;
	}
	_moveSearchToTop() {
		document.querySelector(".search").classList.add("move-to-top");
		document.querySelector(".produce-summary").classList.add("custom-display");
		document.querySelector(".all").classList.add("move-to-bottom");
		document.querySelector("footer").classList.add("remove-footer");
	}

	_removeSummaryFromTop() {
		document
			.querySelector(".produce-summary")
			.classList.remove("custom-display");
		document.querySelector(".all").classList.remove("move-to-bottom");
		document.querySelector("footer").classList.remove("remove-footer");
	}
	submitPeriodHandler(handler) {
		this._parentElement.addEventListener("click", (e) => {
			const startDate = document.getElementById("startDate").value;
			const endDate = document.getElementById("endDate").value;

			handler(startDate, endDate);
		});
	}
}

export default new CustomPeriod();
