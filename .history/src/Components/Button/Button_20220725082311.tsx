import React from "react";

interface Iprops {
    label: string;
    classStyle: string;
    handleOnClick: void;
}
const Button: React.FC<Iprops> = (props) => {
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
