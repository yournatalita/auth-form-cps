import React, { useEffect, useRef, useState } from 'react';
import { Form, Formik, FormikProps } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { AuthFormikState } from './AuthForm.d';
import { validationTexts } from '@/constants';
import { selectUserInfo, sendAuthAction } from '@/store/entities/user';

import Input from '@/ui/elements/Input/Input';
import Button from '@/ui/elements/Button/Button';
import Preloader from '@/ui/elements/Preloader/Preloader';

import styles from './AuthForm.module.scss';
import Router from 'next/router';

const AuthForm = (): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const formEl = useRef<HTMLFormElement>(null);
  const dispatch = useDispatch();
  const userData = useSelector(selectUserInfo);

  useEffect(() => {
    if (userData && userData.name) {
      Router.push('/profile').then(() => {});
    }
  }, [userData]);

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Авторизоваться</h1>
      <Formik
        initialValues={{
          login: '',
          password_hash: '',
        }}
        validationSchema={Yup.object().shape({
          login: Yup.string().required(validationTexts.REQUIRED),
          password_hash: Yup.string().required(validationTexts.REQUIRED),
        })}
        onSubmit={(values, { setSubmitting }): void => {
          setLoading(true);
          setSubmitting(false);

          dispatch(sendAuthAction(values));
        }}
      >
        {(props: FormikProps<AuthFormikState>): JSX.Element => (
          <Form
            ref={formEl}
            className={styles.form}
            method={'POST'}
          >
            <div className={styles.field}>
              <Input
                type="text"
                name="login"
                label={'Логин'}
                placeholder={'Логин'}
                meta={props.getFieldMeta('login')}
                field={props.getFieldProps('login')}
                onClear={(): void => {
                  props.setFieldValue('login', '');
                }}
                required
              />
            </div>
            <div className={styles.field}>
              <Input
                type="password"
                password={true}
                name="login"
                label={'Пароль'}
                placeholder={'Пароль'}
                meta={props.getFieldMeta('password_hash')}
                field={props.getFieldProps('password_hash')}
                onClear={(): void => {
                  props.setFieldValue('password_hash', '');
                }}
                required
              />
            </div>
            <div className={styles.bottom}>
              <Button themes={['blue']} type="submit">
                <>
                  {loading && (
                    <span className={styles.preloader}>
                      <Preloader />
                    </span>
                  )}{' '}
                  <>Войти</>
                </>
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AuthForm;
