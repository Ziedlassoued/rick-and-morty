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

  const mainElement = createElement(
    'main',
    {
      className: 'main',
    },
    [
      createCharacterCard({ name: 'Rick' }),
      createCharacterCard({ name: 'Morty' }),
      createCharacterCard({ name: 'Morty' }),
      createCharacterCard({ name: 'Morty' }),
      createCharacterCard({ name: 'Morty' }),
    ]
  );

  appElement.append(headerElement, mainElement);
}

renderApp();
