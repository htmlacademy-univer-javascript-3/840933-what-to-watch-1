import { Logo } from '../../components/logo/logo';
import { Footer } from '../../components/footer/footer';
import { UserBlock } from '../../components/user-block/user-block';
import { FilmsList } from '../../components/filmsList/filmsList';
import { useAppSelector } from '../../hooks';
import { getFavoriteFilms } from '../../store/film-reducer/selector';

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
