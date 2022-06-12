import { useEffect, useState } from 'react';
import type { NextPage } from "next";
import axios from "axios";
import styled from "styled-components";

const Title = styled.h1`
	font-size: 50px;
`;

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
			localStorage.setItem('user', JSON.stringify(res.data));
			axios.defaults.headers.common['Authorization'] = res.data.jwtToken;
			return res.data.id;
		})
		.catch(err => {
			// location.assign('/'); // go to login page
		})
	}
}

const Home: NextPage = () => {
	const [email, setEmail] = useState();
	useEffect(() => {
		async function checkLogin() {
			const email = await isLoggedIn();
			setEmail(email);
		}
		checkLogin();
	}, []);

	return (
		<div>
			<Title>Home</Title>
			<button onClick={()=> location.assign('/auth/kakao')}>Kakao Login</button>
			<div>Current user: {email}</div>
		</div>
	);
};


export default Home;