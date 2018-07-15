import localStorage from 'react-native-sync-localstorage';

export const addAlienAPI = async (alien) => {
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

		return res; 

	}catch(err){
		console.log(err);
	}
} 



export const editAlienAPI = async (alien) => {
	try 
	{
		var res = await fetch('https://aliens-app.herokuapp.com/api/v1/admin/alliens/' + alien.id, {
			  method: 'PUT',
			  body: JSON.stringify(alien), 
			  headers: {
				Authorization: localStorage.getItem('auth_token'),
				Accept: 'application/json',
				'Content-Type': 'application/json',
			  }
			})
		return res;

	}
	catch(err) 
	{
		console.log(err);	
	}
	
}

export const deleteAlienAPI = async (alienID) => {
	try{	
		var res = await fetch('https://aliens-app.herokuapp.com/api/v1/admin/alliens/' + alienID, {
			  method: 'DELETE',
			  headers: {
				Authorization: localStorage.getItem('auth_token'),
				Accept: 'application/json',
				'Content-Type': 'application/json',
			  }
		});
		return res;
	}
	catch(err) {
		console.log(err);	
	}
}