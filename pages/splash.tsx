import type { NextPage } from "next";

import styled from "styled-components";
import Button from "../components/Button";
import SwipeView from "../components/SwipeView";

const ScreenSize = styled.div`
	width: 375px;
	height: 812px;
`

const Splash = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	color: ${props => props.theme.colors.white};
	background: ${props => props.theme.colors.gray90};
	font-family: 'Noto Sans KR', sans-serif;
`;


const Home: NextPage = () => {
	return (
	<ScreenSize>
		<Splash>
			<SwipeView />
			<Button>다음</Button>
		</Splash>
	</ScreenSize>)
};

export default Home;
