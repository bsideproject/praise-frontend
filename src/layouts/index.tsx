import styled from "styled-components";

const PageContainer = styled.div`
	padding-left: 16px;
	padding-right: 16px;
	@media screen and (min-width: 768px) {
		margin: 0 auto;
		width: 650px;
	}
`;

function DefaultLayout({ children }: { children: React.ReactNode }) {
	return <PageContainer>{children}</PageContainer>;
}

export default DefaultLayout;
