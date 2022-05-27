import View from "../View.js";

class InputProduce extends View {
	_parentElement = document.getElementById("forms-input");
	_formElement = document.querySelector("#produce");

	constructor() {
		super();

		this.submitHandler.bind(this._formElement);
	}
	_generateMarkUp() {
		const markup = this._data.map(
			(cow) => `<option value="${cow.id}">${cow.name}</option>`
		);

		const dateTod = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()}`;

		console.log(new Date().toISOString().substring(0, 10));

		return `
        <form id="produce">
			<h2>Inp<span>ut pro</span>duce</h2>
			<div class="form-group">
                    <label for="date">Date</label>    
                    <input type="date" name= 'date' id='date' placeholder = '' value = '${new Date()
											.toISOString()
											.substring(0, 10)}'>
            </div>
			<div class="form-group">
				<label for="time">Time</label>
				<select id="time" name= 'time' value="time" required>
					<option id = 'time' name = 'time' value="Morning">Morning</option>
					<option id = 'time' name = 'time' value="Noon">Noon</option>
					<option id = 'time' name = 'time' value="Evening">Evening</option>
				</select>
			</div>
			<div class="form-group">
				<label for="selcetCow">Cow </label>
				<select name="selectCow" id="selectCow" required> 
					${markup}	
				</select>
			</div>
			<div class="form-group">
				<label for="quantity">Quantity (Litres)</label>
				<input type="number" id='quantity' name='quantity' steps= '0.01' placeholder="300" required/>
			</div>
			<div class="form-group">
				<button type = 'submit' >Submit</button>
			</div>
		</form>
        `;
	}

	submitHandler(handler) {
		this._parentElement.addEventListener("submit", (e) => {
			e.preventDefault();
			console.log(e.target);
			const dataArray = [...new FormData(e.target)];
			const data = Object.fromEntries(dataArray);

			handler(data, "produce");
		});
	}
}

export default new InputProduce();
