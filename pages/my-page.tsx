import Image from "next/image";
import { ShareNetwork } from "phosphor-react";
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
			Hello
		</DefaultLayout>
	);
}

export default MyPage;
