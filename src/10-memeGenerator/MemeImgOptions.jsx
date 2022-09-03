export const MemeImgOptions = ({ memeOptions = [] }) => {
    return (
        <>
            {memeOptions.map(({ value, description }) => (
                <option value={value} key={value + "optionid"}>{description}</option>
            ))}
        </>
    );
};
