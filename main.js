import { createElement } from './lib/elements';
import './style.css';
import createCharacterCard from './components/characterCard';
import createSearchElement from './components/searchElement';
import { fetchCharacters } from './lib/character';

async function renderApp() {
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
  const searchElement = createSearchElement();

  const characters = await fetchCharacters();

  const characterCards = characters.map((character) =>
    createCharacterCard(character)
  );

  const mainElement = createElement(
    'main',
    {
      className: 'main',
    },
    [searchElement, ...characterCards]
  );

  appElement.append(headerElement, mainElement);
}

renderApp();
