import * as actions from './actions/index';
import store from './store';

store.displatch(actions.newGame());
console.log(store.getState());