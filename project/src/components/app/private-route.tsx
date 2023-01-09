import {Navigate} from 'react-router-dom';
import {useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../constants';
import {getAuthorizationStatus} from '../../store/user-reducer/selector';

type PrivateRouterProps = {
  destinationPage: JSX.Element;
  status: AuthorizationStatus;
  redirectUrl: string;
};

function PrivateRoute({destinationPage, status, redirectUrl}: PrivateRouterProps) {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  return (
    <div>
      {
        (() => {
          if (authorizationStatus === status) {
            return destinationPage;
          } else {
            return <Navigate to={redirectUrl}/>;
          }
        }
        )()
      }
    </div>);
}

export default PrivateRoute;
