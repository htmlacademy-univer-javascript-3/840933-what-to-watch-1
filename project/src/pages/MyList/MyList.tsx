import { Logo } from '../../components/Logo/Logo';
import { Footer } from '../../components/Footer/Footer';
import { UserBlock } from '../../components/User/User';
import { FilmsList } from '../../components/FilmsList/FilmsList';
import { useAppSelector } from '../../hooks';
import { getFavoriteFilms } from '../../store/filmReducer/selector';

export const MyList = () => {
  const films = useAppSelector(getFavoriteFilms);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo light={false} />
        <h1 className="page-title user-page__title">
          My list <span className="user-page__film-count">{films.length}</span>
        </h1>
        <UserBlock />
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={films} />
      </section>
      <Footer />
    </div>
  );
};
