import View from "./View.js";

class InputProduce extends View {
	_parentElement = document.getElementById("forms-input");

	_generateMarkUp() {
		return `
        <form id="produce">
					<h2>Inp<span>ut pro</span>duce</h2>
					<div class="form-group">
						<label for="">Time</label>
						<select name="" id="" value=" Time">
							<option value="Morning">Morning</option>
							<option value="Noon">Noon</option>
							<option value="Evening">Evening</option>
						</select>
					</div>
					<div class="form-group">
						<label for="">Cow </label>
						<select name="" id="" value="Cow">
							<option value="Dunlop">Dunlop</option>
							<option value="Maua">Maua</option>
							<option value="Lelmet">Lelmet</option>
						</select>
					</div>
					<div class="form-group">
						<label for="">Quantity (Litres)</label>
						<input type="text" placeholder="300" />
					</div>
					<div class="form-group">
						<button>Submit</button>
					</div>
				</form>
        `;
	}
}

export default new InputProduce();
