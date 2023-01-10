import { Link, useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../api/apiActionUser';
import { AuthorizationStatus } from '../../enums/auth.enum';
import { AppRoute } from '../../enums/route.enum';
import {
  getAuthorizationStatus,
  getUser,
} from '../../store/userReducer/selector';

export const UserBlock = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const user = useAppSelector(getUser);

  return (
    <ul className="user-block">
      {authorizationStatus === AuthorizationStatus.Auth ? (
        <>
          <li className="user-block__item">
            <div
              className="user-block__avatar"
              onClick={() => navigate('/mylist')}
            >
              <img
                src={user?.avatarUrl}
                alt="User avatar"
                width="63"
                height="63"
              />
            </div>
          </li>
          <li className="user-block__item">
            <Link
              onClick={() => dispatch(logoutAction())}
              className="user-block__link"
              to={'/'}
            >
              Sign out
            </Link>
          </li>
        </>
      ) : (
        <li className="user-block__item">
          <Link to={AppRoute.LOGIN_ROUTE} className="user-block__link">
            Sign in
          </Link>
        </li>
      )}
    </ul>
  );
};
