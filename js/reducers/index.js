const initialGameState = {
	answer,
	guess,
	message,
	new: true
};

export const hotColdReducer = (state=initialGameState, action) => {
	return state;
};
//state needs: answer, guess, message (guess number or temperature), new (boolean?)