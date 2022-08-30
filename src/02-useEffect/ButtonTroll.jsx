import { useState } from "react";

export const ButtonTroll = () => {
    const [{ x, y }, setPosition] = useState({ x: 10, y: 0 - 48 });

    const xPosition = () => {
        const x = Math.floor(Math.random() * (screen.width) -100);
        if (x < -120) {
            return xPosition();
        }
        return x;
    };

    const yPosition = () => {
        const y = Math.floor(Math.random() * (screen.height) -250);
        if (y < -120) {
            return yPosition();
        }
        return y;
    };

    const buttonRandom = () => {
        const x = xPosition();
        const y = yPosition();
        setPosition({ x, y });
    };

    return (
        <div
            className="p-5 position-absolute"
            style={{ left: x, top: y }}
            onMouseOver={buttonRandom}      
            onTouchStart={buttonRandom}      
        >
            <button className="btn btn-secondary">No</button>
        </div>
    );
};
