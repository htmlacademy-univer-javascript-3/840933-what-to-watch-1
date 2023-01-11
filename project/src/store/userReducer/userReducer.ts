import { createSlice } from '@reduxjs/toolkit';

import { AuthorizationStatus } from '../../enums/auth.enum';
import { Reducer } from '../../enums/reducers.enum';
import { UserData } from '../../types/userData.type';
import {
  checkLoginAction,
  loginAction,
  logoutAction,
} from '../../api/apiActionUser';

export type UserReducer = {
  authorizationStatus: AuthorizationStatus;
  user: UserData | null;
};

const initialState: UserReducer = {
  authorizationStatus: AuthorizationStatus.NoAuth,
  user: null,
};

export const userReducer = createSlice({
  name: Reducer.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkLoginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
      })
      .addCase(checkLoginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = null;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = null;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = null;
      })
      .addCase(logoutAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      });
  },
});
