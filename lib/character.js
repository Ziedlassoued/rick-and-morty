export async function fetchCharacters() {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const body = await response.json();
  const characters = body.results;
  return characters;
}
