import { ShareNetwork } from "phosphor-react";
import styled from "styled-components";
import { Header, StickyHeader } from "../src/components/header";
import DefaultLayout from "../src/layouts";

const Title = styled.div`
	font-size: 24px;
	line-height: 150%;
	font-weight: 500;
`;

function MyPage() {
	return (
		<DefaultLayout>
			<StickyHeader>
				<Header>
					<Title>미션 현황</Title>
					<ShareNetwork size={28} />
				</Header>
			</StickyHeader>
			Hello
		</DefaultLayout>
	);
}

export default MyPage;
