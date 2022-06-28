import styled from "styled-components";
import Footer from "../components/footer";

export const PageContainer = styled.div`
	padding-left: 16px;
	padding-right: 16px;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	background-color: ${(props) => props.theme.colors.background};
	@media screen and (min-width: 768px) {
		margin: 0 auto;
		width: 650px;
	}
`;

const Content = styled.div`
	flex: 1 0 auto;
	margin-bottom: 73px;
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
