import { useEffect, useState } from "react";

function QuestionTimer({ timeOutLimit, onTimeOut }) {
    const [remainingTime, setRemainingTime] = useState(timeOutLimit);

    useEffect(() => {
        const timeout = setTimeout(onTimeOut, timeOutLimit);

        return () => {
            clearTimeout(timeout);
        }
    }, [timeOutLimit, onTimeOut])

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
        }, 100);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <progress id="question-time" value={remainingTime} max={timeOutLimit}></progress>
    )
}

export default QuestionTimer;