const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			users: null,
		},
		actions: {
			// HIT the API with url process.env.REACT_APP_BACKEND_URL + "/app_name/model_name/"
			// the var REACT_APP_BACKEND_URL is define in file .env and must point to the url of
			// you backend, in this case, http://localhost:8000. If
			// GET Functions, return serialize data from models and save in store
			getUser: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.REACT_APP_BACKEND_URL + "/api/users/");
					const data = await resp.json();
					setStore({ users: data });
					console.log(data);
					// don't forget to return something, that is how the async resolves
					return true;
				}catch(error){
					console.log("Error loading message from backend", error);
				}
			},
			valueToPrice: (amount=1, price) => {
				let value = amount*price;
				let response = Number(Number(value).toFixed()).toLocaleString('en');
				return '$'+response.replace(',','.');
			},
			
		}
	};
};

export default getState;