import Image from "next/image";
import { Calendar, ShareNetwork } from "phosphor-react";
import styled from "styled-components";
import { Header, StickyHeader } from "../src/components/header";
import DefaultLayout from "../src/layouts";
import AvatarImage from "../public/avatar.svg";

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

const StatusSection = styled.div`
	display: flex;
	flex-direction: column;
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

const MissionCard = styled.div`
	border: 1px dashed ${({ theme }) => theme.colors.gray2};
	border-radius: 10px;
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	row-gap: 6px;
	padding: 12px 0px 8px 0px;
`;

const SectionTitle = styled.div`
	font-size: 14px;
	line-height: 21px;
	font-weight: 500;
`;

const Text = styled.div`
	font-size: 12px;
`;

const StrongText = styled.span`
	font-size: 18px;
	line-height: 27px;
	font-weight: 700;
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
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
			<StatusSection>
				<MissionStatusSection>
					<SectionTitle>미션 현황</SectionTitle>
					<MissionCardContainer>
						<MissionCard>
							<Calendar size={32} />
							<TextContainer>
								<Text>총 미션</Text>
								<Text>
									<StrongText>60</StrongText>개
								</Text>
							</TextContainer>
						</MissionCard>
						<MissionCard>
							<Calendar size={32} />
							<TextContainer>
								<Text>완료 미션</Text>
								<Text>
									<StrongText>24</StrongText>개
								</Text>
							</TextContainer>
						</MissionCard>
						<MissionCard>
							<Calendar size={32} />
							<TextContainer>
								<Text>미완료 미션</Text>
								<Text>
									<StrongText>36</StrongText>개
								</Text>
							</TextContainer>
						</MissionCard>
					</MissionCardContainer>
				</MissionStatusSection>
			</StatusSection>
			Hello
		</DefaultLayout>
	);
}

export default MyPage;
