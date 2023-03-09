import './style.css';
import { add, getScores } from './modules/leader.js';

const refreshBtn = document.getElementById('refresh-btn');
const submitBtn = document.getElementById('submit-btn');
const table = document.getElementById('table');

const refresh = async () => {
  table.innerHTML = '';
  const gamerScores = await getScores();
  const scores = await gamerScores.result;
  scores.forEach((entry) => {
    const listItems = document.createElement('tr');
    listItems.className = 'listItems';
    listItems.innerHTML = `
    <td>${entry.user}</td>
    <td>${entry.score}</td>
`;
    table.appendChild(listItems);
  });
};

refreshBtn.addEventListener('click', async () => {
  await refresh();
});

submitBtn.addEventListener('click', async (event) => {
  event.preventDefault();
  const newScore = {
    user: document.getElementById('name').value,
    score: document.getElementById('score').value,
  };
  document.getElementById('name').value = '';
  document.getElementById('score').value = '';
  await add(newScore);
});