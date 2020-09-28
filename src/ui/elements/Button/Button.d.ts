import { ButtonHTMLAttributes, JSX } from 'react';
export type TClassNames = {
  [className: string]: string;
};

export interface ButtonProps extends ButtonHTMLAttributes<T> {
  themes?: string[];
  text?: string | object;
  children?: JSX.Element;
}
