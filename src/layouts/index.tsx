import styled from "styled-components";
import Footer from "../components/footer";

const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
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
