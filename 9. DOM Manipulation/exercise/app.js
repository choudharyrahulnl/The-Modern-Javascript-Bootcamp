const warriorsGames = [{
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
]

const makeChart = (games, targetTeam) => {

  let ulParent = document.createElement('ul');

  for (const game of games) {
    const {homeTeam,awayTeam} = game;

    const gameLi = document.createElement('li');

    gameLi.innerHTML = getScoreLine(game);

    gameLi.classList.add(isWarrior(game,targetTeam) ? 'win' : 'loss');

    ulParent.append(gameLi);
  }

  return ulParent;
}

const isWarrior = ({awayTeam,homeTeam},targetTeam) => {
  const warriors =  homeTeam.team === targetTeam ? homeTeam : awayTeam;
  return warriors.isWinner;
}

const getScoreLine = ({awayTeam,homeTeam}) => {
  const {points:aPoints,team:aTeam} = awayTeam;
  const {points:hPoints,team:hTeam} = homeTeam;

  const teamNames = `${aTeam} @ ${hTeam}`;
  let scoreLine;
  if (aPoints > hPoints) {
    scoreLine = `<b>${aPoints}</b>-${hPoints}`;
  } else {
    scoreLine = `${aPoints}-<b>${hPoints}</b>`;
  }

  return `${teamNames} ${scoreLine}`;
}


const gsSection = document.querySelector('#gs');
const hrSection = document.querySelector('#hr');

const gsChart = makeChart(warriorsGames, 'Golden State');
const hrChart = makeChart(warriorsGames, 'Houston');

gsSection.appendChild(gsChart);
hrSection.appendChild(hrChart);









// **************************************************
// STEP 1 - UGLY, UN-REFACTORED CODE! (but it works!)
// **************************************************

// const ulParent = document.createElement('ul');
// for (let game of warriorsGames) {
//   const {
//     homeTeam,
//     awayTeam
//   } = game;
//   const gameLi = document.createElement('li');
//   const {
//     team: hTeam,
//     points: hPoints
//   } = homeTeam;
//   const {
//     team: aTeam,
//     points: aPoints
//   } = awayTeam;
//   const teamNames = `${aTeam} @ ${hTeam}`;
//   let scoreLine;
//   if (aPoints > hPoints) {
//     scoreLine = `<b>${aPoints}</b>-${hPoints}`;
//   } else {
//     scoreLine = `${aPoints}-<b>${hPoints}</b>`;
//   }
//   const warriors = hTeam === 'Golden State' ? homeTeam : awayTeam;
//   gameLi.classList.add(warriors.isWinner ? 'win' : 'loss')
//
//   gameLi.innerHTML = `${teamNames} ${scoreLine}`
//   console.log(scoreLine)
//   ulParent.appendChild(gameLi);
// }
//
// document.body.prepend(ulParent)