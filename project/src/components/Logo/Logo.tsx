import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts/route.enum';

interface LogoProps {
  light: boolean;
}

export const Logo = ({ light }: LogoProps) => (
  <div className="logo">
    <Link to={AppRoute.MAIN_ROUTE} className={`logo__link ${light ? 'logo__link-light' : ''}`}>
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </Link>
  </div>
);

