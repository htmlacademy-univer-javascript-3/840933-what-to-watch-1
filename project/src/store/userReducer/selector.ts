import { AuthorizationStatus } from '../../enums/auth.enum';
import { State } from '../../types/store.type';
import { UserData } from '../../types/userData.type';
import { Reducer } from '../../enums/reducers.enum';

export const getAuthorizationStatus = (state: State): AuthorizationStatus =>
  state[Reducer.User].authorizationStatus;
export const getUser = (state: State): UserData | null =>
  state[Reducer.User].user;
