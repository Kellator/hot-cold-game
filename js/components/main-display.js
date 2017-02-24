import React from 'react';
import {connect} from 'react-redux';

import GuessBlock from 'guess-block';
import * as actions from '../actions/index';

export class MainDisplay extends React.Component {
	constructor(props) {
		super(props);
		this.submitGuess = this.submitGuess.bind(this);
	}
	newGame() {
		const submitGuess 
	}
}
const mapStateToProps = (state, props) => ({

});
export default connect(mapStateToProps)(MainDisplay);