// set max number of votes
const maxVotes = 60;

// get elements for each candidate
const candidate1 = document.querySelector('.card:nth-of-type(1)');
const candidate2 = document.querySelector('.card:nth-of-type(2)');
const candidate3 = document.querySelector('.card:nth-of-type(3)');

// set initial vote counts to 0
let count1 = 0;
let count2 = 0;
let count3 = 0;

// add click event listener to each candidate element
candidate1.addEventListener('click', () => {
  if (count1 < maxVotes) {
    count1++;
    count2 = Math.floor((maxVotes - count1) / 2);
    count3 = maxVotes - count1 - count2;
    updateVotes();
  }
});

candidate2.addEventListener('click', () => {
  if (count2 < maxVotes) {
    count2++;
    count1 = Math.floor((maxVotes - count2) / 2);
    count3 = maxVotes - count1 - count2;
    updateVotes();
  }
});

candidate3.addEventListener('click', () => {
  if (count3 < maxVotes) {
    count3++;
    count1 = Math.floor((maxVotes - count3) / 2);
    count2 = maxVotes - count1 - count3;
    updateVotes();
  }
});

// function to update vote counts and display percentages
function updateVotes() {
  // calculate percentage of votes for each candidate
  const total = count1 + count2 + count3;
  const percent1 = Math.round((count1 / total) * 100);
  const percent2 = Math.round((count2 / total) * 100);
  const percent3 = Math.round((count3 / total) * 100);

  // update vote count and percentage display for each candidate
  candidate1.querySelector('.poll__option-fill').style.width = `${percent1}%`;
  candidate1.querySelector('.poll__option-info').textContent = `${count1} votes (${percent1}%)`;

  candidate2.querySelector('.poll__option-fill').style.width = `${percent2}%`;
  candidate2.querySelector('.poll__option-info').textContent = `${count2} votes (${percent2}%)`;

  candidate3.querySelector('.poll__option-fill').style.width = `${percent3}%`;
  candidate3.querySelector('.poll__option-info').textContent = `${count3} votes (${percent3}%)`;
}
