// display initial state of game (new game)
export const NEW_GAME = 'NEW_GAME';
export const newGame = game => ({
	type: NEW_GAME,
	game
});

// submit guess
export const SUBMIT_GUESS = 'SUBMIT_GUESS';
export const submitGuess = submitGuess => ({
	type: SUBMIT_GUESS,
	submitGuess
});

