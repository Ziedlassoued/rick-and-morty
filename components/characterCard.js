import { createElement } from '../lib/elements';
import styles from './characterCard.module.css';

export default function createCharacterCard({
  name,
  image,
  status,
  species,
  lastKnownLocation,
  episode,
}) {
  const firstEpisode = episode[0];

  const firstEpisodeElement = createElement('p', { textContent: 'Loading...' });

  const CharacterCard = createElement(
    'article',
    {
      className: styles.card,
    },
    [
      createElement('img', { className: styles.img, src: image, alt: '' }),
      createElement('h2', { textContent: name }),
      createElement('p', { textContent: `${status} - ${species}` }),
      createElement('h3', { textContent: 'Last known location:' }),
      createElement('p', { textContent: lastKnownLocation }),
      createElement('h3', { textContent: 'First seen in:' }),
      firstEpisodeElement,
    ]
  );

  fetch(firstEpisode)
    .then((Response) => Response.json())
    .then((body) => {
      console.log(body.name);
      firstEpisodeElement.textContent = body.name;
    });
  /* const response = await fetch(firstEpisode);
    const body = await response.json(); */

  return CharacterCard;
}
