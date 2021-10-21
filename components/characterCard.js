import { createElement } from '../lib/elements';
import styles from './characterCard.module.css';

export default function createCharacterCard({ name }) {
  const createCharacterCard = createElement(
    'article',
    {
      className: styles.card,
    },
    [
      createElement('h2', { textContent: name }),
      createElement('h4', { textContent: 'Earth (C-137)' }),
    ]
  );

  return createCharacterCard;
}
