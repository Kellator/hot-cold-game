import * as actions from '../actions/index';
let randomNum = function randomNumber(min, max) {
	return Math.floor(Math.random()*(100) + 1;
}

const initialGameState = {
	answer: randomNum,
	guess,
	display: [],
	feedback:,
	new: true
};
const cold = "You might want a sweater.";
const colder = "Perhaps a parka?";
const coldest = "Hypothermic!";
const warm = "Toasty.";
const warmer = "Beach Day!";
const warmest = "Summer in the Sahara!";
const winner = "Good Job!  You guessed correctly.";

export const hotColdReducer = (state=initialGameState, action) => {
	//new game returns game display to initial state
	if (action.type === actions.NEW_GAME) {
		return initialGameState
	};
	//adds new guess to list, compares guess to answer, displays temp
	else if (action.type === actions.SUBMIT_GUESS) {
		let guess = document.getElementById('guess-input').value;
		let guessList = state.display;
		let newGuessList = guessList.push(guess);
		let answerNum = state.answer;
		const comparison = function(guess, answerNum) {
			if (guess === answerNum) {
				let message = winner;
			};
			else if (guess != answerNum) {
				const difference = function(guess, answerNum) {
					return Math.abs(guess - answerNum);
				}
				if (difference >= 50) {
					message = coldest;
				}
				else if (difference >= 40) {
					message = colder;
				}
				else if (difference >= 30) {
					message = cold;
				}
				else if (difference >= 20) {
					message = warm;
				}
				else if (difference >= 10) {
					message = warmer;
				}
				else if (difference >= 1) {
					message = warmest;
				}
			};
			return message;
		}
		const currentGameState = Object.assign({}, state, {
			guess: guess,
			display: newGuessList,
			feedback: comparison,
			new: false
		});
		return {
			currentGameState;
		}
	}
	return state;
};
//state needs: answer, guess, feedback, new (boolean?)