import { MainPage } from '../../pages/Main';
import { films } from '../../mocks/films.mock';

const FILM_LIMIT = 15;

function App(): JSX.Element {
  return <MainPage films={films} limit={FILM_LIMIT} />;
}

export default App;
