import { Logo } from '../Logo/Logo';

export const HeadGuest = () => (
  <section className="film-card">
    <div className="film-card__bg">
      <img src="img/bg-header.jpg" alt="Header logo"/>
    </div>
    <h1 className="visually-hidden">WTW</h1>
    <header className="page-header">
      <Logo />
      <div className="user-block">
        <a href="sign-in.html" className="user-block__link">
            Sign in
        </a>
      </div>
    </header>
  </section>
);

