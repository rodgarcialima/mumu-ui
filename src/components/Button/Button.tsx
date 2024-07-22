import React, { ComponentProps, forwardRef } from "react";
import { VariantProps } from 'class-variance-authority';
import cn from '../../utils/cn';
import buttonVariants from './Button.variants';

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof buttonVariants>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({className, size, variant, ...props}, ref) => {
  return (
    <button 
      ref={ref} 
      type="button" 
      className={cn(buttonVariants({ variant, size }), className)} 
      data-testid='button' 
      {...props} 
    />
  );
});

export default Button;