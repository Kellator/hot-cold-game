import * as actions from '../actions/index';
let randomNum = function randomNumber(min, max) {
	return Math.floor(Math.random()*(100) + 1;
}

const initialGameState = {
	answer: randomNum,
	guess,
	display: [],
	temperature:,
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
	if (action.type === actions.NEW_GAME) {
		return initialGameState
	};
	else if (action.type === actions.GENERATE_NUMBER) {
		let new = false;
		const currentGameState = Object.assign({}, state, {
			answer: randomNum,
			new: true
		});
		return {
			currentGameState;
		}
	}
	else if (action.type === actions.SUBMIT_GUESS) {
		let guess = document.getElementById('guess-input').value;
		let guessList = state.display;
		let newGuessList = guessList.push(guess);
		const currentGameState = Object.assign({}, state, {
			guess: guess,
			display: newGuessList,
			new: false
		});
	}
	return {

	}
};
//state needs: answer, guess, message (guess number or temperature), new (boolean?)