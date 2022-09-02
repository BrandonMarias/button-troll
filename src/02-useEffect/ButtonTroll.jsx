import { useRef } from "react";
import "./butonTrollTran.css";

const xPosition = () => {
    const x = Math.floor(Math.random() * screen.width - 150);
    if (x < -100) return xPosition();
    return x;
};

const yPosition = () => {
    const y = Math.floor(Math.random() * screen.height - 300);
    if (y < -90) return yPosition();
    return y;
};

export const ButtonTroll = () => {
    const buttonRef = useRef(null);

    const changePosition = () => {
        buttonRef.current.style.transform = `translate(${xPosition()}px, ${yPosition()}px)`;
    };

    return (
        <div
            className="p-5 position-absolute button-troll"
            style={{ left: 10, top: -48 }}
            ref={buttonRef}
            onMouseOver={changePosition}
            onTouchStart={changePosition}
        >
            <button className="btn btn-secondary">No</button>
        </div>
    );
};
