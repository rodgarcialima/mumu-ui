import React, { ComponentProps } from "react";
import './Button.css'

export type ButtonProps = ComponentProps<'button'> & {}

const Button = (props: ButtonProps) => {
    return <button type='button' {...props} />;
};

export default Button;