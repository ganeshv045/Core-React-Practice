import { useRef, useState } from "react";

function TimerChallenge({ title, targetTime }) {
    const timer = useRef();
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpaired, setTimerExpaired] = useState(false);

    function handleTimerStart(){
        timer.current = setTimeout(() => {
            setTimerExpaired(true);
        }, targetTime * 1000)
        setTimerStarted(true);
    }

    function handleTimerStop(){
        clearTimeout(timer.current);
    }

    return (
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
                {timerStarted ? "Timer is active" : "Timer is stopped"}
            </p>
        </section>
    )
}

export default TimerChallenge;