import React from 'react';
import classNames from 'classnames';

import { ButtonProps } from './Button.d';

import stylesDefault from './Button.module.scss';

const Button = ({
  text,
  type = 'button',
  themes = ['blue'],
  children,
  ...rest
}: ButtonProps): JSX.Element => {
  const styles = stylesDefault;

  return (
    <button
      type={type}
      className={classNames(
        styles.root,
        themes.reduce(
          (classes: string, theme: string) => (classes += `${styles[`theme-${theme}`]} `),
          ' '
        ),
        'js-focuss-visible'
      )}
      {...rest}
    >
      {text || children}
    </button>
  );
};

export default Button;
