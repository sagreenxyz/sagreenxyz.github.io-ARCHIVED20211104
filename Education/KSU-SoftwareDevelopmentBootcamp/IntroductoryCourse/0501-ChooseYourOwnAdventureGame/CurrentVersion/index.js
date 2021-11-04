let userName = window.prompt('Please enter your name:');
let userScore = 0;

let firstAnswer = window.prompt('Do you head to the left or to the right? ("Left" or "Right")');

var secondAnswer;
var thirdAnswer;

if(firstAnswer === 'Left'){
	secondAnswer = window.prompt('You come across a stray cat. It scampers off down a small hole just large enough for you to crawl through. Do you follow it or continue on your path? ("Follow" or "Continue")');
	if(secondAnswer === 'Follow'){
		thirdAnswer = window.prompt('You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven. ("Stay" or "Spread the word")');
		if(thirdAnswer === 'Stay'){
			window.alert('You live happily amongst the cats for the rest of your days.');
		}
		if(thirdAnswer === 'Spread the word'){
			window.alert('After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless.');
		}
	} else if (secondAnswer === 'Continue'){
		thirdAnswer = window.prompt('You come across a chamber that reaches upward to a shining light above. There is a long, winding staircase, and a much quicker, but rickety-looking ladder that leads up toward the light. Which do you take? ("Ladder" or "Staircase")');
		if(thirdAnswer === 'Ladder'){
			window.alert('After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall through each of the rungs below. Sheepish, you return home.');
		}
		if(thirdAnswer === 'Staircase'){
			window.alert('After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.');
		}
	}
} else if(firstAnswer === 'Right') {
	secondAnswer = window.prompt('You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure. Another path would lead you away from the dragon altogether. Which do you take? ("Past the dragon" or "Away from the dragon")');
	if(secondAnswer === 'Past the dragon'){
		thirdAnswer = window.prompt('The dragon wakes up and sits upright. You only have a moment to respond, to stay or run: ("Stay" or "Run")');
		if(thirdAnswer === 'Stay'){
			window.alert('You and the dragon have an uplifting conversation about local politics and become lifelong friends.');
		}
		if(thirdAnswer === 'Run'){
			window.alert('Quickly, you run back to the caves entrance. Sheepish, you return home.');
		}
	} else if(secondAnswer === 'Away from the dragon'){
		thirdAnswer = window.prompt('After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do? ("Draw it" or "Pick it")');
		if(thirdAnswer === 'Draw it'){
			window.alert('You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time, discover joy in sharing it with your friends and family, recounting the story of your days as a sorcerer with the aid of the sketch.');
		}
		if(thirdAnswer === 'Pick it'){
			window.alert('You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.');
		}
    }
} else if(firstAnswer === 'Bonus 1'){ /* Bonus #1*/
    secondAnswer = window.prompt('So, you want some bunus stuff, eh? Tell me what you want. ("Gift" or "Cash")');
    if(secondAnswer === 'Gift'){
        window.alert('I have no gifts to give...');
    } else if (secondAnswer === 'Cash') {
        window.alert('I think you\'re asking for too much...');
        }
} else if(firstAnswer === 'Bonus 2'){ /* Bonus #2*/
    secondAnswer = window.prompt('Okay - Bonus 2. What is the secret knock? ("Knock knock")');
    thirdAnswer = window.prompt('And, what is the password? ("keyword")');
    if(secondAnswer === 'Knock knock' && thirdAnswer === 'keyword'){
        window.alert('Come on in!');
    } else if(secondAnswer === 'Knock knock' || thirdAnswer === 'keyword'){
        window.alert('You got one of them correct. But you will have to stay outside.');
    } else {
        window.alert('Yeah, you did not get either of those correct');
    }
}

/* Bonus 3 */
var combinedAnswer = firstAnswer + '|' + secondAnswer + '|' + thirdAnswer;

switch (combinedAnswer) {
    case 'Left|Follow|Stay':
      window.alert('Bonus 3:  You live happily amongst the cats for the rest of your days.');
      break;
    case 'Left|Follow|Spread the word':
      window.alert('Bonus 3:  After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless.');
      break;
    case 'Left|Continue|Ladder':
      window.alert('Bonus 3:  After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall through each of the rungs below. Sheepish, you return home.');
      break;
    case 'Left|Continue|Staircase':
      window.alert('Bonus 3:  After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.');
      break;
    case 'Right|Past the dragon|Stay':
      window.alert('Bonus 3:  You and the dragon have an uplifting conversation about local politics and become lifelong friends.');
      break;
    case 'Right|Past the dragon|Run':
      window.alert('Bonus 3:  Quickly, you run back to the caves entrance. Sheepish, you return home.');
      break;
    case 'Right|Away from the dragon|Draw it':
      window.alert('Bonus 3:  You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time, discover joy in sharing it with your friends and family, recounting the story of your days as a sorcerer with the aid of the sketch.');
      break;
    case 'Right|Away from the dragon|Pick it':
        window.alert('Bonus 3:  You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.');
        break;
    default:
        window.alert('Exiting the Game');
}

window.alert('Your score is: '+userScore);

let serializedGames = localStorage.getItem('games');

let games;
if(serializedGames === null){
    games = [];
} else {
    games = JSON.parse(serializedGames);
}

let game = {
    user: userName,
    score: userScore
};

games.push(game);

serializedGames = JSON.stringify(games);
localStorage.setItem('games', serializedGames);

let highestScoringGame = games[0];

for(let i = 0; i < games.length; i++){
    let game = games[i];
    if(game.score > highestScoringGame.score){
        highestScoringGame = game;
    }
}
window.alert('The high score is: ' + highestScoringGame.score);