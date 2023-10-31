import React from 'react';

interface IButtonProps {
  variant?: 'more' | 'register' | 'cancel';
  shape?: 'square' | 'primary' | 'full';
  size?: 'small' | 'medium' | 'large';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<IButtonProps> = ({
  variant = 'more',
  shape = 'square',
  size = 'medium',
  weight = 'normal',
  children,
}) => {
  const bgColorCSS = {
    more: 'bg-transparent hover:underline text-black-800',
    register: 'bg-black hover:bg-gray-800 text-white',
    cancel:
      'bg-transparent border border-gray-300 hover:bg-gray-300 hover:text-white text-gray-500',
  };

  const shapeCSS = {
    square: 'rounded-none',
    primary: 'rounded',
    full: 'rounded-full',
  };

  const sizeCSS = {
    small: 'text-sm py-1 px-2',
    medium: 'text-base py-2 px-6',
    large: 'text-lg py-3 px-6',
  };

  const fontWeightCSS = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  const buttonClasses = [
    bgColorCSS[variant] || '',
    shapeCSS[shape] || '',
    sizeCSS[size] || '',
    fontWeightCSS[weight] || '',
  ].join(' ');

  return <button className={buttonClasses}>{children}</button>;
};

export default Button;
