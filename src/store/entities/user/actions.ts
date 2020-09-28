import { Dispatch } from 'redux';
import { TAction, StoreState, AuthRequestData } from './index.d';
import * as types from './actionTypes';
import axios from 'axios';
import sha256 from 'crypto-js/sha256';
import Router from "next/router";

export const sendAuthAction = (dataValues: AuthRequestData) => {
  return async (dispatch: Dispatch<TAction<Partial<StoreState>>>): Promise<void> => {
    const hashDigest = sha256(dataValues.password_hash);

    const response = await axios.get(`/api/auth`, {
      params: {
        login: dataValues.login,
        password_hash: hashDigest.toString(),
      },
    });

    const { status, data } = response;

    if (status) {
      dispatch({
        type: types.AUTH_USER,
        payload: {
          data: data,
        },
      });
    } else {
      // Так как мок не умеет отдавать ошибки, они не обрабатываются
      console.error(response);
    }
  };
};

export const getUser = () => {
  return async (dispatch: Dispatch<TAction<Partial<StoreState>>>): Promise<void> => {
    const response = await axios.get(`/api/user`);

    const { status, data } = response;

    if (status) {
      dispatch({
        type: types.GET_USER,
        payload: {
          data: data,
        },
      });
    } else {
      // Так как мок не умеет отдавать ошибки, они не обрабатываются
      console.error(response);
    }
  };
};

export const logout = () => {
  return async (dispatch: Dispatch<TAction<Partial<StoreState>>>): Promise<void> => {
    const response = await axios.get(`/api/auth/logout`);

    const { status } = response;

    if (status) {
      dispatch({
        type: types.LOGOUT,
        payload: {
          logout: true,
        },
      });

      Router.reload();
    } else {
      // Так как мок не умеет отдавать ошибки, они не обрабатываются
      console.error(response);
    }
  };
};
