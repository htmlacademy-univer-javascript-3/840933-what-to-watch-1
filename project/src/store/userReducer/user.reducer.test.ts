import { userReducer } from './user.reducer';
import { AuthorizationStatus } from '../../enums/auth.enum';
import {
  checkLoginAction,
  loginAction,
  logoutAction,
} from '../../api/apiActionUser';

describe('Reducer: user', () => {
  it('should no auth when logout success', () => {
    const user = { id: 5, email: 'test@test', name: 'kisikVladik', token: 'token', avatarUrl: 'https://avatar/123' };
    const state = { authorizationStatus: AuthorizationStatus.Auth, user: user };

    expect(
      userReducer.reducer(state, { type: logoutAction.fulfilled.type })
    ).toEqual({ authorizationStatus: AuthorizationStatus.NoAuth, user: null });
  });

  it('should auth when logout fail', () => {
    const user = { id: 5, email: 'test@test', name: 'kisikVladik', token: 'token', avatarUrl: 'https://avatar/123' };
    const state = { authorizationStatus: AuthorizationStatus.Auth, user: user };

    expect(
      userReducer.reducer(state, { type: logoutAction.rejected.type })
    ).toEqual({ authorizationStatus: AuthorizationStatus.Auth, user: user });
  });

  it('should no auth when login fail', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      user: null,
    };

    expect(
      userReducer.reducer(state, { type: loginAction.rejected.type })
    ).toEqual({ authorizationStatus: AuthorizationStatus.NoAuth, user: null });
  });

  it('should auth when login success', () => {
    const user = { id: 5, email: 'test@test', name: 'kisikVladik', token: 'token', avatarUrl: 'https://avatar/123' };
    const state = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      user: null,
    };

    expect(
      userReducer.reducer(state, {
        type: loginAction.fulfilled.type,
        payload: user,
      })
    ).toEqual({ authorizationStatus: AuthorizationStatus.Auth, user: user });
  });

  it('should no auth when check login fail', () => {
    const user = { id: 5, email: 'test@test', name: 'kisikVladik', token: 'token', avatarUrl: 'https://avatar/123' };
    const state = { authorizationStatus: AuthorizationStatus.Auth, user: user };

    expect(
      userReducer.reducer(state, { type: checkLoginAction.rejected.type })
    ).toEqual({ authorizationStatus: AuthorizationStatus.NoAuth, user: null });
  });
});
