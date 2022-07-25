import React from "react";

interface Iprops {
    label: string;
    classStyle: string;
    handleOnClick: (e: any) => void;
}
const Button: React.FC<Iprops> = (props: any) => {
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
