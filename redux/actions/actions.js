import {addAlienAPI} from './../../api';
export const ADD_ALIEN = 'ADD_ALIEN';
export const DELETE_ALIEN = 'DELETE_ALIEN';
export const UPDATE_ALIEN = 'UPDATE_ALIEN';
export const SET_ALIENS = 'SET_ALIENS';


export const setAliens = (aliens) => (
	{type: SET_ALIENS, payload: aliens}
);
export const addAlien = (alien) => (
	{type: ADD_ALIEN, payload: alien}
)

export const updateAlien = (alien) => (
	{type: UPDATE_ALIEN, payload: alien}
)

export const deleteAlien = (alienID) => (
	{type: DELETE_ALIEN, payload: alienID}
)