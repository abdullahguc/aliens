import {combineReducers} from 'redux';
import {ADD_ALIEN, UPDATE_ALIEN, DELETE_ALIEN, SET_ALIENS} from './../actions/actions';


const alienReducer = (state = [], action) => {
	switch(action.type){
		case ADD_ALIEN:
			return [...state, action.payload];
		case SET_ALIENS:
			return [ ...state, ...action.payload];
		case UPDATE_ALIEN:
			return [ ...state, ...action.payload];
		case DELETE_ALIEN: 
			return state.filter(function(alien){
				return alien.id != action.payload;
			});
	}
	return state;
};

const reducer = combineReducers({
	aliens: alienReducer,
}); 

export default reducer;