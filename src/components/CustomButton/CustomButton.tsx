import { cva, type VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, FC } from 'react';

import { cn } from '../../lib/utils'; // 절대 경로 설정 시 스토리북 에러로 인해 상대경로로 수정

const ButtonVariants = cva(``, {
  variants: {
    variant: {
      more: 'bg-transparent hover:underline text-black-800',
      register: 'bg-black hover:bg-gray-800 text-white',
      cancel:
        'bg-transparent border border-gray-300 hover:bg-gray-300 hover:text-white text-gray-500',
    },
    shape: {
      square: 'rounded-none',
      primary: 'rounded',
      full: 'rounded-full',
    },
    size: {
      small: 'text-sm py-1 px-2',
      medium: 'text-base py-2 px-6',
      large: 'text-lg py-3 px-6',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    variant: 'more',
    shape: 'square',
    size: 'small',
    weight: 'normal',
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  children?: React.ReactNode;
}

export const CustomButton: FC<ButtonProps> = ({
  variant,
  shape,
  size,
  weight,
  children,
  ...props
}) => {
  return (
    <button className={cn(ButtonVariants({ variant, shape, size, weight }))} {...props}>
      {children}
    </button>
  );
};
