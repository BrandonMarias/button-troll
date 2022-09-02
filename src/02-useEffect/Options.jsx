import { ButtonTroll } from "./ButtonTroll";

import JSConfetti from "js-confetti";
const jsConfetti = new JSConfetti();

export const Options = () => {
    const handleConfetti = () => jsConfetti.addConfetti({ emojis: ["🧡"] });

    return (
        <>
            <h2>¿Quieres ser mi novia?</h2>
            <div className="w-100 h-100 position-relative bg-light">
                <button
                    className="btn btn-primary position-absolute"
                    onClick={handleConfetti}
                >
                    Sí
                </button>
                <ButtonTroll />
            </div>
        </>
    );
};
