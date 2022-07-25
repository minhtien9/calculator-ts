import React from "react";

interface Iprops {
    label: string;
    classStyle: string;
    handleOnClick: string;
}
const Button: React.FC = (props) => {
    const { label, classStyle, handleOnClick } = props;
    return (
        <>
            <button className={classStyle} onClick={handleOnClick}>
                {label}
            </button>
        </>
    );
};

export default Button;
