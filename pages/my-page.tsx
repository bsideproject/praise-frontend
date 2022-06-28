import Image from "next/image";
import { Calendar, ShareNetwork } from "phosphor-react";
import styled from "styled-components";
import { Header, StickyHeader } from "../src/components/header";
import DefaultLayout from "../src/layouts";
import AvatarImage from "../public/avatar.svg";
import MissionCard from "../src/components/mission-card";

const Title = styled.div`
	font-size: 24px;
	line-height: 150%;
	font-weight: 500;
`;

const AvatarSection = styled.div`
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

const MissionCardContainer = styled.div`
	display: flex;
	column-gap: 6px;
`;

const MissionStatusSection = styled.div`
	padding: 24px 16px 24px 16px;
	display: flex;
	row-gap: 16px;
	flex-direction: column;
	border-bottom: 1px ${({ theme }) => theme.colors.gray10} solid;
`;

const SectionTitle = styled.div`
	font-size: 14px;
	line-height: 21px;
	font-weight: 500;
`;

const JoinedMissionSection = styled.div`
	font-size: 14px;
	line-height: 21px;
	font-weight: 500;
	border-bottom: 1px ${({ theme }) => theme.colors.gray10} solid;
	padding: 18px;
`;

const MyRewardSection = styled.div`
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
					<ShareNetwork size={28} />
				</Header>
			</StickyHeader>
			<AvatarSection>
				<Image src={AvatarImage} alt="avatar Image" />
				<AvatarName>김지구</AvatarName>
			</AvatarSection>
			<MissionStatusSection>
				<SectionTitle>미션 현황</SectionTitle>
				<MissionCardContainer>
					<MissionCard type="TOTAL" number={60} />
					<MissionCard type="COMPLETED" number={24} />
					<MissionCard type="UNCOMPLETED" number={36} />
				</MissionCardContainer>
			</MissionStatusSection>
			<JoinedMissionSection>참여한 인증 보기</JoinedMissionSection>
			<MyRewardSection>내 리워드 보기</MyRewardSection>
		</DefaultLayout>
	);
}

export default MyPage;
