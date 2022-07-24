import { ArrowLeft } from "phosphor-react";
import { MouseEventHandler } from "react";
import styled, { useTheme } from "styled-components";

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

const BackHeaderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 62px;
	border-bottom: 1px ${({ theme }) => theme.colors.gray10} solid;
	padding: 0px 24px 0px 24px;

	.header-back-icon {
		position: absolute;
		left: 16px;
	}
`;

const Title = styled.div`
	display: flex;
	font-size: 24px;
	line-height: 150%;
	font-weight: 500;
	color: ${(props) => props.theme.colors.white};
`;

const BackHeader = (props: { title: string, onBack: MouseEventHandler<SVGSVGElement> }) => {
	const theme = useTheme();
	
	return (
		<BackHeaderContainer>
			<ArrowLeft 
				className="header-back-icon"
				size={32} 
				weight="regular" 
				onClick={props.onBack} color={theme.colors.white}
			/>
			<Title>{props.title}</Title>
		</BackHeaderContainer>
	)
}



export { StickyHeader, Header, BackHeader };
