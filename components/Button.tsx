import styled from "styled-components";


const Button = styled.button<{ color?: string, background?: string }>`
	border: 0;
	display: flex;
	height: 48px;
	margin: 24px 17px;
	align-items: center;
	justify-content: center;
	font-family: 'Noto Sans KR', sans-serif;
	font-weight: 500;
	font-size: 16px;
	border-radius: 5px;
	color: ${props => props.color ?? props.theme.colors.gray90};
	background: ${props => props.background ?? props.theme.colors.white};
	${props => props.disabled && `background: ${props.theme.colors.gray40}`}
`;

export default Button;