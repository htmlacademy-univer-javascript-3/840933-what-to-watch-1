import {Link} from 'react-router-dom';

export const NotFound = () => (
  <section style={{margin: '2rem'}}>
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
