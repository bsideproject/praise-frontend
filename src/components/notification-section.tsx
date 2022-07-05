import styled from "styled-components";
import Image from "next/image";
import EmptyNotiImage from "../../public/emptyNoti.svg";

const NotiSectionContainer = styled.div`
	height: 100%;
`;

const EmptyNotiContainer = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Text = styled.div`
	color: ${(props) => props.color ?? props.theme.colors.gray60};
`;
const Container = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 40px;
	align-items: center;
`;

const NotiContainer = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 8px;
	padding: 16px;
	border-bottom: 1px ${({ theme }) => theme.colors.gray10} solid;
`;

const NotiContentContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const NotiTitle = styled.div`
	font-size: 16px;
	color: ${(props) => props.color ?? props.theme.colors.white};
`;

const ContentText = styled.div`
	font-size: 14px;
	color: ${(props) => props.color ?? props.theme.colors.gray60};
`;

const ContentCreatedAt = styled.div`
	font-size: 12px;
	color: ${(props) => props.color ?? props.theme.colors.gray60};
`;

interface Props {
	notifications?: Notification[];
}

interface Notification {
	title: string;
	text: string;
	createdAt: Date;
}

function NotificationSection({ notifications }: Props) {
	const EmptyNotificationElement = (
		<EmptyNotiContainer>
			<Container>
				<Image src={EmptyNotiImage} alt="empty Noti Image" />
				<Text>알람이 없어요!</Text>
			</Container>
		</EmptyNotiContainer>
	);

	return (
		<NotiSectionContainer>
			{notifications
				? notifications.map((noti) => (
						<NotiContainer key={noti.title}>
							<NotiTitle>{noti.title}</NotiTitle>
							<NotiContentContainer>
								<ContentText>{noti.text}</ContentText>
								<ContentCreatedAt>{`${noti.createdAt.getDay()}일 전`}</ContentCreatedAt>
							</NotiContentContainer>
						</NotiContainer>
				  ))
				: EmptyNotificationElement}
		</NotiSectionContainer>
	);
}

export default NotificationSection;
