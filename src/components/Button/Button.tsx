import React, { ComponentProps } from "react";

export type ButtonProps = ComponentProps<'button'> & {}

const Button = (props: ButtonProps) => {
    return <button type='button' data-testid='button' className="text-red-400 text-lg" {...props} />;
};

export default Button;