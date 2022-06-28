import type { NextPage } from "next";

import styled from "styled-components";
import isLoggedIn from "../hooks/isLoggedIn";

const Title = styled.h1`
	font-size: 50px;
	background: #FFF;
`;

const Home: NextPage = () => {
	const id = isLoggedIn();
	return <Title>Home</Title>;
};

export default Home;