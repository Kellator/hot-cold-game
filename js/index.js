require('babel-polyfill');

// display initial state of game (new game)
export const NEW_GAME = 'NEW_GAME';
export const newGame = game => ({
	type: NEW_GAME,
	game
});
// generate a random number
export const GENERATE_NUMBER = 'GENERATE_NUMBER';
export const generateNumber = answer => ({
	type: GENERATE_NUMBER,
	answer //function to generate number?
});
// input guess
export const INPUT_GUESS = 'INPUT_GUESS';
export const inputGuess = inputGuess => ({
	type: INPUT_GUESS,
	inputGuess
});
// submit guess
export const SUBMIT_GUESS = 'SUBMIT_GUESS';
export const submitGuess = submitGuess => ({
	type: SUBMIT_GUESS,
	submitGuess
});
// compare guess with random number
export const COMPARE_GUESS = 'COMPARE_GUESS';
export const compareGuess = compare => ({
	type: COMPARE_GUESS,
	compare
});
// display message
export const DISPLAY_MESSAGE = 'DISPLAY_MESSAGE';
export const displayMessage = display => ({
	type: DISPLAY_MESSAGE,
	display
});
// determine if guess is hot or cold
export const HOT_COLD = 'HOT_COLD';
export const hotCold = temperature => ({
	type: HOT_COLD,
	temperature
});
// start new game