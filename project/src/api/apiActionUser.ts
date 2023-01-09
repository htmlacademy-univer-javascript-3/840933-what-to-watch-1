import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { AppDispatch, State } from '../types/store';
import { AppRoute } from '../consts/route.enum';
import { clearToken, saveToken } from '../token';
import { UserData } from '../types/user-data-type';
import { AuthData } from '../types/auth-data';

export const checkLoginAction = createAsyncThunk<
  UserData,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/checkLogin', async (_arg, { extra: api }) => {
  const result = await api.get<UserData>(AppRoute.LOGIN_ROUTE);
  return result.data;
});

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/logout', async (_arg, { extra: api }) => {
  await api.delete<UserData>(AppRoute.LOGOUT_ROUTE).then(() => {
    clearToken();
  });
});

export const loginAction = createAsyncThunk<
  UserData,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'data/login',
  async ({ email, password }, { extra: api }) =>
    await api
      .post<UserData>(AppRoute.LOGIN_ROUTE, { email, password })
      .then((result) => {
        const data = result.data;
        saveToken(data?.token);
        return data;
      })
);
