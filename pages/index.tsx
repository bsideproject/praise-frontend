import type { NextPage } from "next";

import styled from "styled-components";

const Title = styled.h1`
	font-size: 50px;
	background: #FFF;
`;

const Home: NextPage = () => {
	return <Title>Home</Title>;
};

export default Home;