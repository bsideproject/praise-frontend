import styled from "styled-components";

interface HeaderProps {
	children: React.ReactNode;
}

const StickyHeaderContainer = styled.div`
	height: 62px;
	position: sticky;
`;

function StickyHeader({ children }: HeaderProps) {
	return <StickyHeaderContainer>{children}</StickyHeaderContainer>;
}

const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 62px;
	border-bottom: 1px ${({ theme }) => theme.colors.gray10} solid;
	padding: 0px 24px 0px 24px;
`;

export { StickyHeader, Header };
