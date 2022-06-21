import styled from "styled-components";


const Button = styled.button`
	display: flex;
	height: 48px;
	margin: 24px 17px;
	align-items: center;
	justify-content: center;
	font-family: 'Noto Sans KR', sans-serif;
	font-weight: 500;
	font-size: 16px;
	border-radius: 5px;
	color: ${props => props.theme.colors.gray90};
	background: ${props => props.theme.colors.white};
`;

export default Button;
