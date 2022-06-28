import Link from "next/link";
import { Alarm, CalendarCheck, Smiley } from "phosphor-react";
import styled from "styled-components";

const FooterContainer = styled.div`
	border-top: 1px ${({ theme }) => theme.colors.gray10} solid;
	padding-top: 14px;
	padding-bottom: 14px;
	position: sticky;
	bottom: 0px;
	z-index: 10;
	background-color: ${(props) => props.theme.colors.background};
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
	cursor: pointer;
`;

const NavigationText = styled.div`
	font-size: 8px;
	line-height: 150%;
	color: ${(props) => props.theme.colors.gray60};
`;

const NavLinks = [
	{
		name: "DAILY_MISSION",
		path: "/daily-missions",
		text: "데일리 미션",
		icon: <Alarm size={32} color="#676570" />,
	},
	{
		name: "MISSION_STATUS",
		path: "/mission-status",
		text: "미션 현황",
		icon: <CalendarCheck size={32} color="#676570" />,
	},
	{
		name: "MY_PAGE",
		path: "/my-page",
		text: "마이 페이지",
		icon: <Smiley size={32} color="#676570" />,
	},
];

function Footer() {
	return (
		<FooterContainer>
			<NavigationBar>
				{NavLinks.map((navLink) => (
					<Link href={navLink.path} key={navLink.name}>
						<NavigationItem>
							{navLink.icon}
							<NavigationText>{navLink.text}</NavigationText>
						</NavigationItem>
					</Link>
				))}
			</NavigationBar>
		</FooterContainer>
	);
}

export default Footer;
