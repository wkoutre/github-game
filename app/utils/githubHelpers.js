var axios = require('axios');

var id = "";
var sec = "";
var param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo (username) {

	// returns a PROMISE
	return axios.get('https://api.github.com/users/' + username + param);
}

function getRepos (username) {
  return axios.get('https://api.github.com/users/' + username + '/repos' + param + '&per_page=100');
}

function getTotalStars (repos) {
	return repos.data.reduce(function (acc, current) {
		return acc + current.stargazers_count;
	}, 0)
}

function getPlayersData (player) {
  return getRepos(player.login)
    .then(getTotalStars)
    .then(function (totalStars) {
      return {
        followers: player.followers,
        totalStars: totalStars
      }
    })
}

function calculateScores (players) {
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ]
}	

var helpers = {

	// we're calling getUserInfo for each user in the array
	// it will EVALUATE to an array of PROMISES...
	// axios.all takes in the array of promises, resolves them...
	// THEN 'then' runs
	getPlayersInfo: function (players) {
    return axios.all(players.map(function (username) {
      return getUserInfo(username)
    })).then(function (info) {
      return info.map(function (user) {
        return user.data;
      })
    })
    .catch(function (err) {
    	console.warn('Error in getPlayersInfo: ', err)
    })
  },

  battle: function (players) {
  	var playerOneData = getPlayersData(players[0]);
  	var playerTwoData = getPlayersData(players[1]);

  	return axios.all([playerOneData, playerTwoData])
  		.then(calculateScores)
  		.catch(function (err) {
  			console.warn("There's an error: ", err);
  		})
  }
};

module.exports = helpers;