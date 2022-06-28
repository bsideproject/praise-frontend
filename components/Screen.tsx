import styled from "styled-components";

//width: 100vw;
//height: 100vh;

const Screen = styled.div`
    display: flex;
	flex-direction: column;
	width: 375px;
	height: 756px;
	color: ${props => props.theme.colors.white};
	background: ${props => props.theme.colors.gray90};
	font-family: 'Noto Sans KR', sans-serif;
`;

export default Screen;