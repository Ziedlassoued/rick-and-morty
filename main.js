import { createElement } from './lib/elements';
import './style.css';

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
    [createElement('p', { textContent: 'In development...' })]
  );

  appElement.append(headerElement, mainElement);
}

renderApp();
