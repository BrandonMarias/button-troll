import { useRef } from "react";
import html2canvas from "html2canvas";
import { FormMeme,Meme} from "./10-memeGenerator";
import { useForm } from "./hooks";
import "./10-memeGenerator/memeStyles.css";

export const MemeGenerator = () => {
    const { handleChange, topText, bottomText, img } = useForm({
        topText: "",
        bottomText: "",
        img: "fire",
    });

    const meme = useRef();

    const downloadMeme = async () => {
        const memeCanvas = await html2canvas(meme.current);
        const link = document.createElement("a");
        link.download = "meme.png";
        link.href = memeCanvas.toDataURL("image/png");
        link.click();
    };

    return (
        <div className="container-fluid text-center">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <FormMeme
                        handleChange={handleChange}
                        topText={topText}
                        bottomText={bottomText}
                        onDownload={downloadMeme}
                    />
                </div>
            </div>
            <hr />
            <div className="row justify-content-center">
                <Meme
                    topText={topText}
                    bottomText={bottomText}
                    img={img}
                    memeRef={meme}
                />
            </div>
        </div>
    );
};
