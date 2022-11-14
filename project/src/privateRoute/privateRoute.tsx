import { Navigate } from 'react-router-dom';

import { AppRoute } from '../constants/AppRoute.const';
import { AuthorizationStatus } from '../constants/AuthStatus.const';

type Props = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
};

export const PrivateRoute = ({ authorizationStatus, children }: Props) =>
  authorizationStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.SignIn} />
  );
