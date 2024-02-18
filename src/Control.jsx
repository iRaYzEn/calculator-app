import { useRef, useState } from "react";

export default function Control() {
    const [stage, setStage] = useState(1)

    const ballRef = useRef(null)

    function handleClick() {
        if (stage == 1) {
            ballRef.current.style.transform = "translateX(16px)"
            setStage(stage => stage + 1)
        } else if (stage == 2) {
            ballRef.current.style.transform = "translateX(32px)"
            setStage(stage => stage + 1)
        } else if (stage == 3) {
            ballRef.current.style.transform = "translateX(0)"
            setStage(1)
        }
    }

	return (
		<div className="control">
			<p className="control__title">calc</p>
			<div className="control__theme-changer">
				<p className="theme-changer__theme">theme</p>
				<div onClick={handleClick} role="button" className="control__bar">
					<div ref={ballRef} className="control__ball"></div>
				</div>
			</div>
		</div>
	);
}
