import { ChangeEvent, FormEvent, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Logo } from '../../components/Logo/Logo';
import { Footer } from '../../components/Footer/Footer';
import { useAppDispatch } from '../../hooks';
import { AppRoute } from '../../enums/route.enum';
import { loginAction } from '../../api/apiActionUser';
import { AuthData } from '../../types/authData.type';
import { checkPassword } from '../../utils/auth.util';

export const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);

  const handleEmailChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }, []);

  const handlePasswordChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }, []);

  const onSubmit = useCallback((authData: AuthData) => {
    dispatch(loginAction(authData))
      .then(() => {
        navigate(AppRoute.MAIN_ROUTE);
      })
      .catch(() => {
        setIsError(true);
      });
  }, [dispatch, navigate]);

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (email && password && checkPassword(password)) {
      onSubmit({
        email,
        password,
      });
    } else {
      setIsError(true);
    }
  }, [email, onSubmit, password]);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo light={false} />
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
          {isError &&
            <div className="sign-in__message">
              <p>Please enter a valid email address</p>
            </div>}
          <div className="sign-in__fields">
            <div
              className={
                isError
                  ? 'sign-in__field sign-in__field--error'
                  : 'sign-in__field'
              }
            >
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                value={email}
                onChange={handleEmailChange}
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-email"
              >
                Email address
              </label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                value={password}
                onChange={handlePasswordChange}
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-password"
              >
                Password
              </label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">
              Sign in
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};
