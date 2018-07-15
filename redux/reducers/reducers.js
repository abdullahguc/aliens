import {combineReducers} from 'redux';
import {ADD_ALIEN, UPDATE_ALIEN, DELETE_ALIEN} from './../actions/actions';


const alienReducer = (state = [], action) => {
	switch(action.type){
		case ADD_ALIEN: 
			return [...state, action.payload];
		case UPDATE_ALIEN:
			return state;
		case DELETE_ALIEN: 
			return state;
	}
	return state;
};

const reducer = combineReducers({
	aliens: alienReducer,
}); 

export default reducer;