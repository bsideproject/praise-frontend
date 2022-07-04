import styled from "styled-components";
import { Header, StickyHeader } from "../src/components/header";
import DefaultLayout from "../src/layouts";
import Modal from "../src/components/modal";
import { useState } from "react";
import BellImage from "../public/bell.svg";
import Image from "next/image";
import NotificationSection from "../src/components/notification-section";

const MOCK_NOTIFICATIONS = [
	{ title: "hello", text: "world", createdAt: new Date() },
];

const Title = styled.div`
	font-size: 24px;
	line-height: 150%;
	font-weight: 500;
	color: ${(props) => props.theme.colors.white};
`;

function TodayMission() {
	const [showModal, setShowModal] = useState(false);

	return (
		<DefaultLayout>
			<StickyHeader>
				<Header>
					<Title>오늘의 미션</Title>
					<Image
						src={BellImage}
						alt="bell Image"
						onClick={() => setShowModal(true)}
					/>
				</Header>
			</StickyHeader>
			<Modal title="알림" onBack={() => setShowModal(false)} show={showModal}>
				<NotificationSection notifications={MOCK_NOTIFICATIONS} />
			</Modal>
		</DefaultLayout>
	);
}

export default TodayMission;
