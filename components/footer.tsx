import Link from "next/link";
import { useRouter } from "next/router";
import { Alarm, CalendarCheck, Smiley } from "phosphor-react";
import Image from "next/image";
import ActiveAlarmImg from "../public/icon/ActiveAlarm.svg";
import CalendarCheckImg from "../public/icon/CalendarCheck.svg";
import MyPageImg from "../public/icon/MyPage.svg";
import styled, { useTheme } from "styled-components";

const FooterContainer = styled.div`
	border-top: 1px ${({ theme }) => theme.colors.gray10} solid;
	position: sticky;
	bottom: 0px;
	z-index: 10;
	background-color: ${(props) => props.theme.colors.background};
`;

const NavigationBar = styled.ul`
	text-decoration: none;
	display: flex;
	padding: 14px 36px;
	justify-content: space-between;
`;

const NavigationItem = styled.li<{ selected?: boolean }>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	color: ${(props) => props.theme.colors.gray60};

	${props => props.selected && `
		color: white;
	`}
`;

const NavigationText = styled.div`
	font-size: 8px;
	line-height: 150%;
`;



function Footer() {
	const router = useRouter();
	const theme = useTheme();

	const NavLinks = [
		{
			name: "DAILY_MISSION",
			path: "/daily-mission",
			text: "데일리 미션",
			icon: <Alarm size={32} color={theme.colors.gray60} />,
			selectedIcon: ActiveAlarmImg
		},
		{
			name: "MISSION_STATUS",
			path: "/mission-status",
			text: "미션 현황",
			icon: <CalendarCheck size={32} color={theme.colors.gray60} />,
			selectedIcon: CalendarCheckImg
		},
		{
			name: "MY_PAGE",
			path: "/my-page",
			text: "마이 페이지",
			icon: <Smiley size={32} color={theme.colors.gray60} />,
			selectedIcon: MyPageImg
		},
	];

	return (
		<FooterContainer>
			<NavigationBar>
				{NavLinks.map((navLink) => (
					<Link href={navLink.path} key={navLink.name}>
						<NavigationItem selected={router.asPath === navLink.path}>
							{router.asPath === navLink.path
								? <Image width={28} height={28} src={navLink.selectedIcon} alt={navLink.selectedIcon} />
								: navLink.icon
							}
							<NavigationText>{navLink.text}</NavigationText>
						</NavigationItem>
					</Link>
				))}
			</NavigationBar>
		</FooterContainer>
	);
}

export default Footer;
