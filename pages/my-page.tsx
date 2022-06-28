import Image from "next/image";
import { ShareNetwork } from "phosphor-react";
import styled from "styled-components";
import { Header, StickyHeader } from "../src/components/header";
import DefaultLayout from "../src/layouts";
import AvatarImage from "../public/avatar.svg";
import Link from "next/link";
import MissionStatusSection from "../src/components/mission-status-section";

const Title = styled.div`
	font-size: 24px;
	line-height: 150%;
	font-weight: 500;
`;

const AvatarSection = styled.section`
	padding-top: 24px;
	padding-bottom: 24px;
	display: flex;
	column-gap: 13px;
	align-items: center;
	border-bottom: 1px ${({ theme }) => theme.colors.gray10} solid;
`;

const AvatarName = styled.div`
	font-size: 20px;
	font-weight: 500;
`;

const JoinedMissionSection = styled.section`
	font-size: 14px;
	line-height: 21px;
	font-weight: 500;
	border-bottom: 1px ${({ theme }) => theme.colors.gray10} solid;
	padding: 18px;
	cursor: pointer;
`;

const MyRewardSection = styled.section`
	font-size: 14px;
	line-height: 21px;
	font-weight: 500;
	border-bottom: 1px ${({ theme }) => theme.colors.gray10} solid;
	padding: 18px;
`;

function MyPage() {
	return (
		<DefaultLayout>
			<StickyHeader>
				<Header>
					<Title>미션 현황</Title>
					<Link href="/share">
						<ShareNetwork size={28} />
					</Link>
				</Header>
			</StickyHeader>
			<AvatarSection>
				<Image src={AvatarImage} alt="avatar Image" />
				<AvatarName>김지구</AvatarName>
			</AvatarSection>
			<MissionStatusSection />
			<JoinedMissionSection>
				<Link href="/completed">참여한 인증 보기</Link>
			</JoinedMissionSection>
			<MyRewardSection>
				<Link href="my-reward">내 리워드 보기</Link>
			</MyRewardSection>
		</DefaultLayout>
	);
}

export default MyPage;
