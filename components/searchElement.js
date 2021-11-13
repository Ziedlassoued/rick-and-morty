import { createElement } from '../lib/elements';
import styles from './searchElement.module.css';

export default function createSearchElement(onSubmit) {
  let timeoutId;
  const textInput = createElement('input', {
    placeholder: 'Search for a character',
    oninput: () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        onSubmit(textInput.value);
      });
    },
  });
  const searchElement = createElement(
    'form',
    {
      onsubmit: (event) => {
        event.preventDefault();
        onSubmit(textInput.value);
      },
      className: styles.searchElement,
    },
    [textInput, createElement('input', { type: 'submit' })]
  );
  return searchElement;
}
