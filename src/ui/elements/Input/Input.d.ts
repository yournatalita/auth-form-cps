import { DetailedHTMLFactory, InputHTMLAttributes } from 'react';
import { FormikProps } from 'formik';
import { FieldInputProps, FieldMetaProps } from 'formik/dist/types';

export * from 'react';

export interface TInputProps extends InputHTMLAttributes<any> {
  label?: string;
  password?: boolean;
  onClear?: (event?: any) => void;
  onFocus?: (event?: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event?: FocusEvent<HTMLInputElement>) => void;
  onChange?: (event?: FocusEvent<HTMLInputElement>) => void;
  field?: FieldInputProps<any>;
  meta?: FieldMetaProps<any>;
  loading?: boolean;
}
