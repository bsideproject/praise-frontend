import { Alarm, CalendarCheck, Smiley } from "phosphor-react";
import styled from "styled-components";
import Footer from "../components/footer";

const PageContainer = styled.div`
	padding-left: 16px;
	padding-right: 16px;
	min-height: 100vh;
	background-color: ${(props) => props.theme.colors.background};
	position: relative;
	@media screen and (min-width: 768px) {
		margin: 0 auto;
		width: 650px;
	}
`;

const Content = styled.div``;

function DefaultLayout({ children }: { children: React.ReactNode }) {
	return (
		<PageContainer>
			<Content>{children}</Content>
			<Footer />
		</PageContainer>
	);
}

export default DefaultLayout;
