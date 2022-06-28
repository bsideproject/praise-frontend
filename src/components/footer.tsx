import { Alarm, CalendarCheck, Smiley } from "phosphor-react";
import styled from "styled-components";

const FooterContainer = styled.div`
	border-top: 1px ${({ theme }) => theme.colors.gray10} solid;
	padding-top: 14px;
	padding-bottom: 14px;
	width: 100%;
	height: 51px;
	position: absolute;
	bottom: 0;
	left: 0;
`;

const NavigationBar = styled.ul`
	text-decoration: none;
	display: flex;
	justify-content: space-evenly;
`;

const NavigationItem = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const NavigationText = styled.div`
	font-size: 8px;
	line-height: 150%;
`;

function Footer() {
	return (
		<FooterContainer>
			<NavigationBar>
				<NavigationItem>
					<Alarm size={28} />
					<NavigationText>데일리 미션</NavigationText>
				</NavigationItem>
				<NavigationItem>
					<CalendarCheck size={28} />
					<NavigationText>미션 현황</NavigationText>
				</NavigationItem>
				<NavigationItem>
					<Smiley size={28} />
					<NavigationText>마이 페이지</NavigationText>
				</NavigationItem>
			</NavigationBar>
		</FooterContainer>
	);
}

export default Footer;
