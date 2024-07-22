import { cva } from 'class-variance-authority';

const buttonVariants = cva(
    [
        'active:scale-95',
        'inline-flex',
        'items-center',
        'justify-center',
        'rouded-md',
        'text-sm',
        'font-medium',
        'transition-colors',
        'focus:outline-none',
        'focus:ring-2',
        'focus:ring-slate-400',
        'focus:ring-slate-400',
        'disabled:pointer',
    ],
    {
        variants: {
            variant: {
                default: 'bg-blue-600',
                outline: 'bg-transparent border border-blue-600 text-blue-600',
            },
            size: {
                default: 'h-10 px-4 py-2',
                sm: 'h-8 px-3 py-1 rouded-md text-sm hover:bg-primary-500',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    },
);

export default buttonVariants;
