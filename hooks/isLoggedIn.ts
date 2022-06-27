import axios from "axios";

const isLoggedIn = () => {
	if (typeof window === 'undefined') return "";
	const user = localStorage.getItem('user');
	
	if(user) {
		const { id, jwtToken } = JSON.parse(user);
		axios.defaults.headers.common['Authorization'] = jwtToken;
		return id;
	} else {
		return axios
		.get<{ id: string, jwtToken: string }>('/auth')
		.then(res => {
			localStorage.setItem('user', JSON.stringify(res.data)); // for saving a token to localStorage from authenicated session
			axios.defaults.headers.common['Authorization'] = res.data.jwtToken;
			return res.data.id;
		})
		.catch(err => {
			location.assign('/splash'); // go to login page
		})
	}
}

export default isLoggedIn;