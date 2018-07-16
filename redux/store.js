import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers/reducers';


const logActions = store => next => action => {
	console.log(action);
	next(action);

}

export const store = createStore(reducer, applyMiddleware(logActions));


export default store;