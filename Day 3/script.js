function play(option) {
  let result = document.getElementById('result');
  let choices = ['rock', 'paper', 'scissor'];
  let computerOption = choices[Math.floor(Math.random() * 3)];

  if (option === computerOption) {
    result.innerHTML = `<h2>It's a Draw!<br>Your: ${option}<br>Computer: ${computerOption}</h2>`;
  } else if (
    (option === 'rock' && computerOption === 'scissor') ||
    (option === 'paper' && computerOption === 'rock') ||
    (option === 'scissor' && computerOption === 'paper')
  ) {
    result.innerHTML = `<h2>You Win!<br>Your Choice: ${option}<br>Computer's: ${computerOption}</h2>`;
  } else {
    result.innerHTML = `<h2>Computer Wins!<br>Your Choice: ${option}<br>Computer's: ${computerOption}</h2>`;
  }
}


