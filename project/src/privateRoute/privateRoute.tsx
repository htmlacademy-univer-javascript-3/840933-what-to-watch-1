import { Navigate } from 'react-router-dom';

import { AppRoute } from '../constants/route.const';
import { AuthorizationStatus } from '../constants/auth.const';

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
