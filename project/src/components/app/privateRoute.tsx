import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../enums/auth.enum';
import { getAuthorizationStatus } from '../../store/userReducer/selector';

type PrivateRouterProps = {
  destinationPage: JSX.Element;
  status: AuthorizationStatus;
  redirectUrl: string;
};

export const PrivateRoute = ({
  destinationPage,
  status,
  redirectUrl,
}: PrivateRouterProps) => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <div>
      {authorizationStatus === status ? destinationPage : <Navigate to={redirectUrl} />}
    </div>
  );
};
