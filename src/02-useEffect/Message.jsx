import { useEffect } from "react";

export const Message = () => {
    useEffect(() => {
        const handleMouseMove = ({ x, y }) => {
            console.log({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <>
            <h3>El usuario ya existe</h3>
        </>
    );
};
