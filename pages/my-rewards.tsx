import styled from "styled-components";
import { Header, StickyHeader } from "../components/Header";
import { PageContainer } from "../layouts";
import MyRewardsSection from "../components/MyRewardsSection";
import { useRouter } from "next/router";

const Title = styled.div`
	font-size: 24px;
	line-height: 150%;
	font-weight: 500;
	color: ${(props) => props.theme.colors.white};
`;

function MyRewards() {
	const router = useRouter();
	const { animate, state } = router.query

	console.log(animate);
	console.log(state);

	return (
		<PageContainer>
			<StickyHeader>
				<Header>
					<Title>내 리워드 보기</Title>
				</Header>
			</StickyHeader>
			<MyRewardsSection animate={parseInt(animate)} state={parseInt(state)} />
		</PageContainer>
	);
}

export default MyRewards;
