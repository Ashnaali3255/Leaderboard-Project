const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/bQNCbQ7GSatHf8dhQAB8/scores';

// get the scores
export const getScores = async () => {
  const response = await fetch(`${url}`);
  const data = await response.json();
  return data;
};

// add score
export const add = async (newScore) => {
  const response = await fetch(`${url}`, {
    method: 'POST',
    headers: {
      'content-Type': 'application/json',
    },
    body: JSON.stringify(newScore),
  });
  const data = await response.json();
  return data;
};

export default { add, getScores };