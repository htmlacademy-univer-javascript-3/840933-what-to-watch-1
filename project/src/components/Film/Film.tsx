export type IFilm = {
    name: string;
    imagePath: string;
}

export const Film = ({ name, imagePath }: IFilm): JSX.Element => (
  <article className="small-film-card catalog__films-card">
    <div className="small-film-card__image">
      <img src={imagePath} alt={name} width={280} height={175} />
    </div>
    <h3 className="small-film-card__title">
      <a className="small-film-card__link" href="film-page.html">
        { name }
      </a>
    </h3>
  </article>
);
