import React from "react";

export const Meme = ({ topText, bottomText, img, memeRef }) => {
    return (
        <div className="col-md-6">
            <div className="meme" ref={memeRef}>
                <span className="topText">{topText}</span>
                <span className="bottomText">{bottomText}</span>
                <img src={`/img/${img}.jpg`} alt="/img/fire.jpg" />
            </div>
        </div>
    );
};
