import { TInputProps } from './Input.d';
import React, { useState } from 'react';
import classNames from 'classnames';
import SVG from 'react-inlinesvg';

import Preloader from '@/ui/elements/Preloader/Preloader';

import styles from './Input.module.scss';

const Input = (props: TInputProps): JSX.Element => {
  const {
    name,
    field,
    meta,
    onClear,
    label,
    onBlur,
    onFocus,
    onChange,
    required,
    password,
    loading,
    ...rest
  } = props;

  const isError = meta && meta.touched && meta.error;
  const value = (field?.value && field.value) || rest.value;
  const [eyeOpened, setEyeOpened] = useState(rest.type);

  return (
    <label
      className={classNames(styles.root, {
        ['is-error']: !!isError,
        [styles.isFull]: !!value,
      })}
    >
      {label && (
        <span
          className={classNames(styles.text, {
            [styles.required]: !!required,
          })}
        >
          {label}
          {!!required && ' *'}
        </span>
      )}
      <div className={classNames(styles.inputWrapper)}>
        <input
          {...rest}
          {...field}
          onChange={(e): void => {
            field?.onChange(e);

            if (onChange) {
              onChange(e);
            }
          }}
          onFocus={(e): void => {
            if (onFocus) {
              onFocus(e);
            }
          }}
          onBlur={(e): void => {
            field?.onBlur(e);
            if (onBlur) {
              onBlur(e);
            }
          }}
          type={password ? eyeOpened : rest.type}
          className={classNames(styles.input, {
            [styles.error]: isError,
            [styles.hasOpenEye]: !!password,
          })}
        />
        {password && !(!!value && isError) && (
          <button
            type="button"
            className={classNames(styles.passwordEye)}
            onClick={(): void => {
              if (password) {
                setEyeOpened(eyeOpened === 'text' ? 'password' : 'text');
              }
            }}
          >
            {password && eyeOpened === 'password' && (
              <SVG
                className={styles.icon}
                width={22}
                height={22}
                src={'./icons/passwordShow.svg'}
              />
            )}
            {password && eyeOpened === 'text' && (
              <SVG
                className={styles.iconHide}
                width={19}
                height={19}
                src={'./icons/passwordHide.svg'}
              />
            )}
          </button>
        )}
      </div>
      {isError && <span className={styles.errorText}>{meta?.error}</span>}
      {loading && (
        <div className={styles.preloader}>
          <Preloader color={'#28b93c'} />
        </div>
      )}
    </label>
  );
};

export default Input;
