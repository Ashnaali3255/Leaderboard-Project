const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

// Get the game Id
export const getId = async () => {
  const fetchId = await fetch(url, {
    method: 'POST',
    headers: {
      'content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      name: 'new game for me',
    }),
  });
  const id = await fetchId.json();
  return id.result.split(' ')[3];
};

// get the scores
export const getScores = async (id) => {
  const response = await fetch(`${url}${id}/scores/`);
  const data = await response.json();
  return data;
};

// add score
export const add = async (newScore, id) => {
  const response = await fetch(`${url}${id}/scores/`, {
    method: 'POST',
    headers: {
      'content-Type': 'application/json',
    },
    body: JSON.stringify(newScore),
  });
  const data = await response.json();
  return data;
};

export default { getId, add, getScores };