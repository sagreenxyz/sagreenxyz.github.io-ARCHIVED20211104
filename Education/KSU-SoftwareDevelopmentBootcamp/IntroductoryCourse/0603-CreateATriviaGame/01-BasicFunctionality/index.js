let userName = window.prompt('Please enter your name:');
let userScore = 0;

for(let i = 0; i < questions.length; i++){
    if(window.prompt(questions[i].text) == questions[i].correctAnswer){
        userScore += 10;
    }
}

window.alert('Your score is: ' + userScore);

// Retrieve games array from local storage
let serializedGames = localStorage.getItem('games');  // Retrieve game history from localStorage
let games;
if(serializedGames === null){
    games = []; // If no prior history, create an empty games array
} else {
    games = JSON.parse(serializedGames); // Otherwise, populate the games array with the history
}

// Add current game results to games array
let game = {
    user: userName,
    score: userScore
};
games.push(game);

// Store game history in localStorage
serializedGames = JSON.stringify(games);
localStorage.setItem('games', serializedGames);

// Display the highest score in the total game history
let highestScore = games[0].score;
for(let i = 0; i < games.length; i++){
    if(userScore > games[i].score){
        highestScore = userScore;
    }
}
window.alert(`All-Time Highest Score: ${highestScore}`);