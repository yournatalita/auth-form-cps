import * as types from './actionTypes';
import { StoreState, TAction } from './index.d';

const initialState: Partial<StoreState> = {};

export default function Reducer(state = initialState, action: TAction<any>): Partial<StoreState> {
  switch (action.type) {
    case types.AUTH_USER:
      return {
        ...initialState,
        ...state,
        ...action.payload,
      };
    case types.GET_USER:
      return {
        ...initialState,
        ...state,
        ...action.payload,
      };
    case types.LOGOUT:
      return {
        ...initialState,
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
