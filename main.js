const MAX_VOTES = 60;

const candidates = [
  {
    name: 'Candidate 1',
    votes: 0,
    percent: 0,
    image: 'assets/candidate.jpg',
    index: 0
  },
  {
    name: 'Candidate 2',
    votes: 0,
    percent: 0,
    image: 'assets/candidate.jpg',
    index: 1
  },
  {
    name: 'Candidate 3',
    votes: 0,
    percent: 0,
    image: 'assets/candidate.jpg',
    index: 2
  }
];

function updatePercent(index, percent) {
  const percentEl = document.querySelectorAll('.poll__label')[index + 3];
  percentEl.textContent = percent + '%';
}

function castVote(candidate) {
  if (candidate.votes < MAX_VOTES) {
    candidate.votes += 1;

    candidates.forEach(candidate => {
      candidate.percent = (candidate.votes / MAX_VOTES) * 100;
      const fillEl = document.querySelectorAll('.poll__option-fill')[candidate.index];
      fillEl.style.width = candidate.percent + '%';
      updatePercent(candidate.index, candidate.percent.toFixed(2));
    });
  }
}

const optionEls = document.querySelectorAll('.poll__option');
optionEls.forEach((optionEl, index) => {
  optionEl.addEventListener('click', () => {
    castVote(candidates[index]);
  });
});


