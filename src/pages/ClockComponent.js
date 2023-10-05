import React, { useState, useEffect } from "react";

const publicBetaDateTime = "2021/9/9 8:00:00 (zh-CN)";

const ClockComponent = ({style}) => {
    const [time, setTime] = useState("")

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            setTime(now.toLocaleString('zh-CN'))
        }, 1000)

        return () => {
            clearInterval(timer);
        }
    }, [])

    return (
        <div className="Clock">
            <p style={style}><span>{publicBetaDateTime}</span> - <span>{time} (zh-CN)</span></p>
        </div>
    )
};

export default ClockComponent;