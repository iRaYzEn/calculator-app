import Control from "./Control";

function App() {
	return (
		<div className="wrapper">
			<Control />
		</div>
	);
}

function ShowNumbers() {
    return (
        <input type="number" className="shownumbers" />
    )
}

export default App;
