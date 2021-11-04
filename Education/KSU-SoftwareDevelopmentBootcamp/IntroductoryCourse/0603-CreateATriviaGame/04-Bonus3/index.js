let userName = window.prompt('Please enter your name:');
if(!!userName){ // Null values for userName cause highest score logic to fail.
    let userScore = 0;

    for(let i = 0; i < questions.length; i++){
        let userAnswer = window.prompt(questions[i].text);

        // If a wrong answer, inform the player with "Your score is" or "Your score remains" as appropriate.
        let subMsg
        if(i == 0){
            subMsg = 'is';
        } else {
            subMsg = 'remains';
        }

        // Ask the question and provide the user with a responder.
        if(userAnswer == questions[i].correctAnswer){
            userScore += 10;
            window.alert(`YES!!!  The answer was "${questions[i].correctText}."\n\nYour score is ${userScore} points.`)
        } else {

            window.alert(`WRONG... Your score ${subMsg} ${userScore} points. To review, the question was:\n\n${questions[i].text}\n\nThe correct answer was "${questions[i].correctText}." You answered "${userAnswer}."`)
        }
    }

    //window.alert('Your score is: ' + userScore); // Combining this with highest score message into one alert - code shown near end

    // Retrieve games array from local storage (this snippet is repeated again below - needs function?)
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

    // Retrieve games array (again) from local storage for highest score comparisons
    serializedGames = localStorage.getItem('games');  // Retrieve game history from localStorage
    if(serializedGames === null){
        games = []; // If no prior history, create an empty games array
    } else {
        games = JSON.parse(serializedGames); // Otherwise, populate the games array with the history
    }

    // Display the highest score in the total game history and the person scoring the highest score.
    let highestScore = -1; // initialize to dummy value to avoid testing for null in conditional - easier to code.
    let highestScorePosition;
    for(let i = 0; i < games.length; i++){
        if(games[i].score > highestScore){
            highestScore = games[i].score;
            highestScorePosition = i;
        }
    }

    if(games[highestScorePosition].user == userName){
        subMsg = ` That's you!`;
    } else {
        subMsg = '';
    }
    
    window.alert(`Thank you, ${userName} for playing our game.\n\nYour score is: (${userScore}).\n\nAll-Time Highest Score: (${games[highestScorePosition].score}) by ${games[highestScorePosition].user}.${subMsg}`);
} else { // userName was not provided.
    window.alert('Unable to play game without providing a name.');
}
