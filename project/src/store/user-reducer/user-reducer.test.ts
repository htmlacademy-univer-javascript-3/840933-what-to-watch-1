import {userReducer} from './user-reducer';
import {AuthorizationStatus} from '../../constants';
import {UserData} from '../../types/user-data-type';
import {checkLoginAction, loginAction, logoutAction} from '../../api/apiActionUser';

describe('Reducer: user', () => {
  it('should no auth when unknown action', () => {
    expect(userReducer.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({authorizationStatus: AuthorizationStatus.NoAuth, user: null});
  });

  it('should no auth when logout success', () => {
    const user = {id:5, email: 'test@test', name:'userName'} as UserData;
    const state = {authorizationStatus: AuthorizationStatus.Auth, user: user};
    expect(userReducer.reducer(state, {type: logoutAction.fulfilled.type}))
      .toEqual({authorizationStatus: AuthorizationStatus.NoAuth, user: null});
  });

  it('should auth when logout fail', () => {
    const user = {id:5, email: 'test@test', name:'userName'} as UserData;
    const state = {authorizationStatus: AuthorizationStatus.Auth, user: user};
    expect(userReducer.reducer(state, {type: logoutAction.rejected.type}))
      .toEqual({authorizationStatus: AuthorizationStatus.Auth, user: user});
  });

  it('should no auth when login fail', () => {
    const state = {authorizationStatus: AuthorizationStatus.NoAuth, user: null};
    expect(userReducer.reducer(state, {type: loginAction.rejected.type}))
      .toEqual({authorizationStatus: AuthorizationStatus.NoAuth, user: null});
  });

  it('should auth when login success', () => {
    const user = {id:5, email: 'test@test', name:'userName'} as UserData;
    const state = {authorizationStatus: AuthorizationStatus.NoAuth, user: null};
    expect(userReducer.reducer(state, {type: loginAction.fulfilled.type, payload: user}))
      .toEqual({authorizationStatus: AuthorizationStatus.Auth, user: user});
  });

  it('should auth when check login success', () => {
    const user = {id:5, email: 'test@test', name:'userName'} as UserData;
    const state = {authorizationStatus: AuthorizationStatus.Auth, user: user};
    expect(userReducer.reducer(state, {type: checkLoginAction.fulfilled.type}))
      .toEqual({authorizationStatus: AuthorizationStatus.Auth, user: user});
  });

  it('should no auth when check login fail', () => {
    const user = {id:5, email: 'test@test', name:'userName'} as UserData;
    const state = {authorizationStatus: AuthorizationStatus.Auth, user: user};
    expect(userReducer.reducer(state, {type: checkLoginAction.rejected.type}))
      .toEqual({authorizationStatus: AuthorizationStatus.NoAuth, user: null});
  });
});
