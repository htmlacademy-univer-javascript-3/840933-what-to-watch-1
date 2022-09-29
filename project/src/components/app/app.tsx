import { MainPage } from '../../pages/Main';

const films = [
  {
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
    imagePath: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg'
  },
  {
    name: 'Bohemian Rhapsody',
    imagePath: 'img/bohemian-rhapsody.jpg'
  },
  {
    name: 'Macbeth',
    imagePath: 'img/macbeth.jpg'
  },
  {
    name: 'Aviator',
    imagePath: 'img/aviator.jpg'
  },
  {
    name: 'We need to talk about Kevin',
    imagePath: 'img/we-need-to-talk-about-kevin.jpg'
  },
  {
    name: 'What We Do in the Shadows',
    imagePath: 'img/what-we-do-in-the-shadows.jpg'
  },
  {
    name: 'Revenant',
    imagePath: 'img/revenant.jpg'
  },
  {
    name: 'Johnny English',
    imagePath: 'img/johnny-english.jpg'
  },
  {
    name: 'Shutter Island',
    imagePath: 'img/shutter-island.jpg'
  },
  {
    name: 'Pulp Fiction',
    imagePath: 'img/pulp-fiction.jpg'
  },
  {
    name: 'No Country for Old Men',
    imagePath: 'img/no-country-for-old-men.jpg'
  },
  {
    name: 'Snatch',
    imagePath: 'img/snatch.jpg'
  },
  {
    name: 'Moonrise Kingdom',
    imagePath: 'img/moonrise-kingdom.jpg'
  },
  {
    name: 'Seven Years in Tibet',
    imagePath: 'img/seven-years-in-tibet.jpg'
  },
  {
    name: 'Midnight Special',
    imagePath: 'img/midnight-special.jpg'
  },
  {
    name: 'War of the Worlds',
    imagePath: 'img/war-of-the-worlds.jpg'
  },
  {
    name: 'Dardjeeling Limited',
    imagePath: 'img/dardjeeling-limited.jpg'
  },
  {
    name: 'Mindhunter',
    imagePath: 'img/mindhunter.jpg'
  },
  {
    name: 'Midnight Special',
    imagePath: 'img/midnight-special.jpg'
  },
];

function App(): JSX.Element {
  return <MainPage films={films} />;
}

export default App;
