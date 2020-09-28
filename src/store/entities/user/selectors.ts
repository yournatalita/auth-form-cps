import { TRootReducer } from '../../index.d';
import { UserInfo } from './index.d';

export const selectUserInfo = (state: TRootReducer): UserInfo | undefined => state.user.data;
export const selectLogout = (state: TRootReducer): boolean | undefined => state.user.logout;
