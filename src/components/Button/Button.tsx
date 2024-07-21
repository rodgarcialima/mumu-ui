import React, { ComponentProps } from "react";
import { tv, type VariantProps } from 'tailwind-variants';

const buttonStyles = tv({
    base: 'px-4 py-1.5 rounded-full hover:opacity-80',
    variants: {
      color: {
        primary: 'bg-blue-500 text-white',
        neutral: 'bg-zinc-500 text-black dark:text-white'
      },
      flat: {
        true: 'bg-transparent'
      }
    },
    defaultVariants: {
      color: 'primary'
    },
    compoundVariants: [
      {
        color: 'primary',
        flat: true,
        class: 'bg-blue-500/40'
      },
      {
        color: 'neutral',
        flat: true,
        class: 'bg-zinc-500/20'
      }
    ]
});

type ButtonVariants = VariantProps<typeof buttonStyles>;

export type ButtonProps = ComponentProps<'button'> & ButtonVariants;

const Button = (props: ButtonProps) => {
    return <button className={buttonStyles(props)} data-testid='button' />;
};

export default Button;