import React from "react";
import { memes } from "./memes";
import { MemeImgOptions } from "./MemeImgOptions";
export const FormMeme = ({ handleChange, topText, bottomText, onDownload }) => {
    return (
        <form>
            <select
                className="form-select mt-2"
                name="img"
                onChange={handleChange}
            >
                <MemeImgOptions memeOptions={memes} />
            </select>
            <input
                type="text"
                name="topText"
                placeholder="Top Text"
                value={topText}
                className="form-control mt-2"
                onChange={handleChange}
            />
            <input
                type="text"
                name="bottomText"
                placeholder="Bottom Text"
                value={bottomText}
                className="form-control mt-2"
                onChange={handleChange}
            />
            <button className="btn btn-primary" onClick={onDownload} type="button">Download</button>
        </form>
    );
};
