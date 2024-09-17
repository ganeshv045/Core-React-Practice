import { useEffect, useState } from "react";

const ProgressBar = ({max}) => {
    const [remainingTime, setRemainingTime] = useState(max);
    useEffect(() => {
        const timerId = setInterval(() => {
            setRemainingTime((prevTimer) => prevTimer - 10)
        }, 10)

        return () => {
            console.log("interval cleared");
            clearTimeout(timerId);
        }
    }, [])

    return <progress value={remainingTime} max={max} />
}

export default ProgressBar;