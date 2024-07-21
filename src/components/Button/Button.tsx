import React, { ComponentProps } from "react";

export type ButtonProps = ComponentProps<'button'> & {}

const Button = (props: ButtonProps) => {
    return <button type='button' {...props} />;
};

export default Button;