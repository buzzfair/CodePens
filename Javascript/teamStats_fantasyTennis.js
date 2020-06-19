//Team Stats project
//create and extract data about my fantasy tennis team

const team = {
  _players: [
    {
    firstName: 'Roger',
    lastName: 'Federer',
    age: 40
    },
    {
    firstName: 'Stan',
    lastName: 'Wawrinka',
    age: 35
    },
    {
    firstName: 'Andy',
    lastName: 'Murray',
    age: 33
    }
  ],
  _games: [
     {
    opponent: 'Rafa',
    teamPoints: 271,
    opponentPoints: 270
    },
     {
    opponent: 'Nole',
    teamPoints: 280,
    opponentPoints: 276
    },
     {
    opponent: 'Thiem',
    teamPoints: 280,
    opponentPoints: 273
    }
  ],
get players() {
    return this._players;
  },  
get games() {
    return this._games;
  },
  addPlayer(firstName,lastName,age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    }; 
  return this.players.push(player);
  },
  addGame(opp,tmPts,oppPts) {
    let game = {
      opponent: opp,
      teamPoints: tmPts,
      opponentPoints: oppPts
    };
    this.games.push(game);
  }
};

team.addPlayer('Stefanos','Titsipas',21);
team.addPlayer('Sasha','Zverev',23);
team.addPlayer('Daniil','Medvedev',24);

console.log(team._players);

team.addGame('The Fog',245,239);
team.addGame('Carol',291,176);
team.addGame('Monfils',189,194);

console.log(team._games);

// Output: [ { firstName: 'Roger', lastName: 'Federer', age: 40 },
//   { firstName: 'Stan', lastName: 'Wawrinka', age: 35 },
//   { firstName: 'Andy', lastName: 'Murray', age: 33 },
//   { firstName: 'Stefanos', lastName: 'Titsipas', age: 21 },
//   { firstName: 'Sasha', lastName: 'Zverev', age: 23 },
//   { firstName: 'Daniil', lastName: 'Medvedev', age: 24 } ]

// [ { opponent: 'Rafa', teamPoints: 271, opponentPoints: 270 },
//   { opponent: 'Nole', teamPoints: 280, opponentPoints: 276 },
//   { opponent: 'Thiem', teamPoints: 280, opponentPoints: 273 },
//   { opponent: 'The Fog', teamPoints: 245, opponentPoints: 239 },
//   { opponent: 'Carol', teamPoints: 291, opponentPoints: 176 },
//   { opponent: 'Monfils', teamPoints: 189, opponentPoints: 194 } ]