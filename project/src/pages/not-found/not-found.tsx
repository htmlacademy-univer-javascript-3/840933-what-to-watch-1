import { Logo } from '../../components/logo/logo';

export const NotFound = () => (
  <div className="user-page">
    <header className="page-header user-page__head">
      <Logo light={false} />
      <h1 className="page-title user-page__title">404 Page Not Found</h1>
    </header>
  </div>
);
