import { createElement } from '../lib/elements';
import styles from './searchElement.module.css';

export default function createSearchElement(onSubmit) {
  const textInput = createElement('input', {
    placeholder: 'Search for a character',
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
