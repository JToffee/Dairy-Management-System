import View from "./View.js";

class CustomPeriod extends View {
	_parentElement = document.querySelector(".custom-period");

	_generateMarkUp() {
		return `
        <div class = 'period-container'
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
        </div>
        `;
	}
	submitHandler(handler) {
		this._parentElement.addEventListener("click", (e) => {
			const startDate = document.getElementById("startDate").value;
			const endDate = document.getElementById("endDate").value;
			handler(startDate, endDate);
		});
	}
}

export default new CustomPeriod();
