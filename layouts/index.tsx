import styled from "styled-components";
import Footer from "../components/Footer";

export const PageContainer = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	font-family: 'Noto Sans KR', sans-serif;
	background-color: ${(props) => props.theme.colors.background};
	@media screen and (min-width: 685px) {
		margin: 0 auto;
		width: 650px;
	}
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1 0 auto;
`;

function DefaultLayout({ children }: { children: React.ReactNode }) {
	return (
		<PageContainer>
			<Content>{children}</Content>
			<Footer />
		</PageContainer>
	);
}

export default DefaultLayout;
