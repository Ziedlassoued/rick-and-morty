import { createElement } from './lib/elements';
import './style.css';
import createCharacterCard from './components/characterCard';

function renderApp() {
  const appElement = document.querySelector('#app');

  const headerElement = createElement(
    'header',
    {
      className: 'header',
    },
    [
      createElement('h1', {
        textContent: 'Rick and Morty',
      }),
    ]
  );

  const characters = [
    {
      name: 'Public Opinion Judge',
      imgSrc: 'https://rickandmortyapi.com/api/character/avatar/514.jpeg',
      status: 'Alive',
      race: 'Human',
      lastKnownLocation: 'Earth (Replacement Dimension)',
      firstSeenIn: 'Edge of Tomorty: Rick, Die, Rickpeat',
    },

    {
      name: 'Baby Legs',
      imgSrc: 'https://rickandmortyapi.com/api/character/avatar/29.jpeg',
      status: 'Alive',
      race: 'Human',
      lastKnownLocation: 'Interdimensional Cable',
      firstSeenIn: 'Rixty Minutes',
    },

    {
      name: 'Insurance Rick',
      imgSrc: 'https://rickandmortyapi.com/api/character/avatar/164.jpeg',
      status: 'Unknown',
      race: 'Human',
      lastKnownLocation: 'Citadel of Ricks',
      firstSeenIn: 'Close Rick-counters of the Rick Kind',
    },
  ];

  const characterCards = characters.map((character) =>
    createCharacterCard(character)
  );

  const mainElement = createElement(
    'main',
    {
      className: 'main',
    },
    characterCards
  );

  appElement.append(headerElement, mainElement);
}

renderApp();
