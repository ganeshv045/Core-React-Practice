import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

function TimerChallenge({ title, targetTime }) {
    const timer = useRef();
    const dialog = useRef();

    const updatedTargetTime = targetTime * 1000;

    const [timeRemaining, setTimeRemaining] = useState(updatedTargetTime);

    const timerIsActive = timeRemaining > 0 && timeRemaining < updatedTargetTime;

    if(timeRemaining <= 0){
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleReset(){
        setTimeRemaining(updatedTargetTime);
    }

    function handleTimerStart() {
        timer.current = setInterval(() => {
            setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
        }, 10);
    }


    function handleTimerStop() {
        clearInterval(timer.current);
        dialog.current.open();
    }

    return (
        <>
            <ResultModal 
                ref={dialog} 
                targetTime={targetTime} 
                remainingTime={timeRemaining}
                onReset={handleReset}
            />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ""}
                </p>
                <p>
                    <button
                        onClick={timerIsActive ? handleTimerStop : handleTimerStart}
                    >
                        {timerIsActive ? "Stop" : "Start"} Challenge
                    </button>
                </p>
                <p className={timerIsActive ? "active" : null}>
                    {timerIsActive ? "Timer is active" : "Timer is inactive"}
                </p>
            </section>
        </>
    )
}

export default TimerChallenge;