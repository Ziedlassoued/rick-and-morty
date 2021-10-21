import { createElement } from '../lib/elements';
import styles from './characterCard.module.css';

export default function createCharacterCard({
  name,
  imgSrc,
  status,
  race,
  lastKnownLocation,
  firstSeenIn,
}) {
  const createCharacterCard = createElement(
    'article',
    {
      className: styles.card,
    },
    [
      createElement('img', { className: styles.img, src: imgSrc, alt: '' }),
      createElement('h2', { textContent: name }),
      createElement('p', { textContent: `${status} - ${race}` }),
      createElement('h3', { textContent: 'Last known location:' }),
      createElement('p', { textContent: lastKnownLocation }),
      createElement('h3', { textContent: 'First seen in:' }),
      createElement('p', { textContent: firstSeenIn }),
    ]
  );

  return createCharacterCard;
}
