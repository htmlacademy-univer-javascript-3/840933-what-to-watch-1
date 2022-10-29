import {Link} from 'react-router-dom';

export const NotFound = () => (
  <section className='not-found-page__container'>
    <h1>
      404
    </h1>
    <p>
      Страница не найдена
    </p>
    <Link to="/">
      Вернуться на главную
    </Link>
  </section>
);
