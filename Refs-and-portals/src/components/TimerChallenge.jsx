import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

function TimerChallenge({ title, targetTime }) {
    const timer = useRef();
    const dialog = useRef();
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpaired, setTimerExpaired] = useState(false);

    function handleTimerStart() {
        timer.current = setTimeout(() => {
            setTimerExpaired(true);
            dialog.current.showModal();
        }, targetTime * 1000)
        setTimerStarted(true);
    }

    function handleTimerStop() {
        clearTimeout(timer.current);
    }

    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
            <section className="challenge">
                <h2>{title}</h2>
                {timerExpaired && <p>You lost!</p>}
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ""}
                </p>
                <p>
                    <button
                        onClick={timerStarted ? handleTimerStop : handleTimerStart}
                    >
                        {timerStarted ? "Stop" : "Start"} Challenge
                    </button>
                </p>
                <p className={timerStarted ? "active" : null}>
                    {timerStarted ? "Timer is active" : "Timer is inactive"}
                </p>
            </section>
        </>
    )
}

export default TimerChallenge;