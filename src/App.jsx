import Control from "./Control";
import ShowNumbers from "./ShowNumber";

function App() {
	return (
		<div className="wrapper">
			<Control />
			<ShowNumbers />
			<Buttons />
		</div>
	);
}

function Buttons() {
	return (
		<div className="buttons">
			<div className="buttons__row">
				<button className="btn btn--num" type="button">
					7
				</button>
				<button className="btn btn--num" type="button">
					8
				</button>
				<button className="btn btn--num" type="button">
					9
				</button>
				<button className="btn btn--num btn--del" type="button">
					DEL
				</button>
			</div>
			<div className="buttons__row">
				<button className="btn btn--num" type="button">
					4
				</button>
				<button className="btn btn--num" type="button">
					5
				</button>
				<button className="btn btn--num" type="button">
					6
				</button>
				<button className="btn btn--num" type="button">
					+
				</button>
			</div>

			<div className="buttons__row">
				<button className="btn btn--num" type="button">
					1
				</button>
				<button className="btn btn--num" type="button">
					2
				</button>
				<button className="btn btn--num" type="button">
					3
				</button>
				<button className="btn btn--num" type="button">
					-
				</button>
			</div>
			<div className="buttons__row">
				<button className="btn btn--num" type="button">
					.
				</button>
				<button className="btn btn--num" type="button">
					0
				</button>
				<button className="btn btn--num" type="button">
					/
				</button>
				<button className="btn btn--num" type="button">
					x
				</button>
			</div>
			<div className="buttons__row">
				<button className="btn btn--num btn--reset" type="button">
                    Reset
				</button>
				<button className="btn btn--num btn--equal" type="button">
                    =
				</button>
			</div>
		</div>
	);
}

export default App;
