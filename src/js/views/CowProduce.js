import View from "./View.js";
import { cows } from "../../../data/cows.js";
import { sum } from "../../../util/sum.js";
import { produce } from "../../../data/produce.js";

class CowProduce extends View {
	_parentElement = document.querySelector(".all");
	_cowProduce;
	_produce = produce;
	_cowBtnContainer;

	showCowProduce(data) {
		this._cowProduce = data;
		console.log(this._cowProduce);
	}

	_generateMarkUp() {
		return `
        <section class="per-cow">
					<div class = 'btn-container'>
					<button class="btn-produce" id= 'allproduce'>All Cows</button>
					${cows
						.map(
							(cow) =>
								`<button class="btn-produce" id = '${cow.id}' >${cow.name}</button>`
						)
						.join("")}
						
					</div>
        <div class="cow-produce">
						<table>
							<th>Morning</th>
							<th>Noon</th>
							<th>Evening</th>
                            <th> Total</th>
							<tr>${
								this._cowProduce
									? `
									<td>${sum(this.filterByDuration("morning", this._cowProduce))}</td>
									<td>${sum(this.filterByDuration("noon", this._cowProduce))}</td>
									<td>${sum(this.filterByDuration("evening", this._cowProduce))}</td>
                                    <td>${sum(
																			this._filterProduceSum(this._cowProduce)
																		)}</td>`
									: `<td>${sum(
											this.filterByDuration("morning", this._produce)
									  )}</td>
								<td>${sum(this.filterByDuration("noon", this._produce))}</td>
								<td>${sum(this.filterByDuration("evening", this._produce))}</td>
                                <td>${sum(
																	this._filterProduceSum(this._produce)
																)}</td>`
							}
							</tr>
						</table>
					</div>
                    </section>
`;
	}
	//Cow btn clicked handler fx

	clickCowBtnHandler(handler) {
		this._parentElement.addEventListener("click", (e) => {
			if (e.target.classList.contains("btn-produce")) {
				const id = e.target.getAttribute("id");
				const days = this._days;
				e.target.classList.add("btn-active");
				console.log(e.target.classList);

				handler(id, days);
			}
		});
	}
}

export default new CowProduce();
