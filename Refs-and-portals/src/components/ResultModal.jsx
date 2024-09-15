import { forwardRef } from "react";

const ResultModal = forwardRef(function ResultModal({ result, targetTime }, ref) {
    return (
        <dialog className="result-modal" ref={ref}>
            <h2>You {result}</h2>
            <p>The target time was {targetTime} Seconds.</p>
            <p>You stopped the timer with <strong>X seconds left.</strong></p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
})

export default ResultModal;