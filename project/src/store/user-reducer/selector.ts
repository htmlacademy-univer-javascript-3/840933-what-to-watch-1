import { AuthorizationStatus } from '../../constants';
import { State } from '../../types/store';
import { UserData } from '../../types/user-data-type';
import { Reducer } from '../../consts/reducers.enum';

export const getAuthorizationStatus = (state: State): AuthorizationStatus =>
  state[Reducer.User].authorizationStatus;
export const getUser = (state: State): UserData | null =>
  state[Reducer.User].user;
