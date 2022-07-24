import axios from "axios";

const dummyJwtToken = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJuaWNrbmFtZSI6InRlc3QwMDEiLCJpZCI6MSwiZW1haWwiOiJ0ZXN0MDAxQGdtYWlsLmNvbSIsImlzcyI6Inplcm9saWZlIiwiZXhwIjoxNjU4ODQ2NzQ1fQ.KvBDnfJtbWvIdAWK3EOrprQZvmXY5IDNdAf8jlCiboPNNTxkGa7x5HG5UevFWHZ8kSNjpv097onLr7yyYpY3mQ';

const isLoggedIn = () => {
	if (typeof window === 'undefined') return "";
	const user = localStorage.getItem('user');
	
	if(user) {
		const { id, jwtToken } = JSON.parse(user);
		// axios.defaults.headers.common['Authorization'] = jwtToken;
		axios.defaults.headers.common['Authorization'] = dummyJwtToken;
		return id;
	} else {
		return axios
		.get<{ id: string, jwtToken: string }>('/auth')
		.then(res => {
			localStorage.setItem('user', JSON.stringify(res.data)); // for saving a token to localStorage from authenicated session
			// axios.defaults.headers.common['Authorization'] = res.data.jwtToken;
			axios.defaults.headers.common['Authorization'] = dummyJwtToken;
			return res.data.id;
		})
		.catch(err => {
			location.assign('/splash'); // go to login page
		})
	}
}

export default isLoggedIn;