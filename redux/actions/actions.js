export const ADD_ALIEN = 'ADD_ALIEN';
export const DELETE_ALIEN = 'DELETE_ALIEN';
export const UPDATE_ALIEN = 'UPDATE_ALIEN';



export const addAlien = (alien) => async dispatch => {
	try {
		var res = await fetch('https://aliens-app.herokuapp.com/api/v1/admin/alliens/' + alien.id, {
			  method: 'POST',
			  body: JSON.stringify(alien), 
			  headers: {
				Authorization: localStorage.getItem('auth_token'),
				Accept: 'application/json',
				'Content-Type': 'application/json',
			  }
			});

		dispatch({type: ADD_ALIEN, payload: alien});

	}catch(err){
		console.log(err);
	}
}