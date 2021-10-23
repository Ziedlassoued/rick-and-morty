import { createElement } from '../lib/elements';
import styles from './searchElement.module.css';

export default function createSearchElement(onSubmit) {
  const textInput = createElement('input', { typ: 'submit' });
  const searchElement = createElement(
    'form',
    {
      onsubmit: (event) => {
        event.preventDefault();
        onSubmit(textInput.value);
      },
      className: styles.searchElement,
    },
    [textInput, createElement('input', { typ: 'submit' })]
  );
  return searchElement;
}
