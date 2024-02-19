import { useState } from "react";

export default function ShowNumbers() {
	const [inputValue, setInputValue] = useState('');


    function handleChange(e) {
        setInputValue(e.target.value);
    }

	return (
		<input
			value={inputValue}
			onChange={e => handleChange(e)}
			type="number"
			className="show-numbers"
		/>
	);
}
