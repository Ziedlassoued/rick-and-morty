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
        textContent: 'Rick & Morty',
      }),
    ]
  );

  async function handleSubmit(searchQuery) {
    console.log(searchQuery);
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name= ${searchQuery}`
    );
    const body = await response.json();
    const characters = body.results;
    const characterElements = characters.map((character) =>
      createCharacterCard(character)
    );
    console.log(characterElements);
    mainElement.innerHTML = '';
    mainElement.append(...characterElements);
  }

  const searchElement = createSearchElement(handleSubmit);

  const characters = await fetchCharacters();

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
  const onclick = function () {
    window.scrollTo(0, 0);
  };
  const footerElement = createElement(
    'footer',
    {
      className: 'footer',
    },
    [
      createElement('button', {
        textContent: 'Rick & Morty',
        onclick: onclick,
      }),
    ]
  );

  appElement.append(headerElement, searchElement, mainElement, footerElement);
}

renderApp();
