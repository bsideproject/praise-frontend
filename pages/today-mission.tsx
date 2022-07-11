/* eslint-disable @next/next/no-img-element */
import { Bell } from "phosphor-react";
import styled, { useTheme } from "styled-components";
import { Header, StickyHeader } from "../src/components/header";
import DefaultLayout from "../src/layouts";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import BellImage from "../public/icon/Bell.svg";
import Modal from "../src/components/modal";
import NotificationSection from "../src/components/notification-section";
import { useEffect, useState } from "react";

const Title = styled.div`
	font-size: 24px;
	line-height: 150%;
	font-weight: 500;
	color: ${(props) => props.theme.colors.white};
`;

const _Bell = styled(Bell)`
	filter: drop-shadow(0px 0px 3px white);
	> path {
		fill: ${props => props.theme.colors.secondary10};
	}
`

const Content = styled.section`
	padding: 32px 21px;
	padding-bottom: 0px;
	display: flex;
	flex-direction: column;
	flex: 1;
`;

const Tooltip = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	background: rgba(255,255,255,0.15);
	padding: 18px 20px;
	border: 0.5px dashed white;
	border-radius: 10px;
	box-sizing: border-box;
	min-height: 100px;
	margin-bottom: 23px;

	// background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%23FFFFFF' stroke-width='1' stroke-dasharray='3%2c 8' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e"); border-radius: 10px;

	.message {
		color: white;
		font-weight: 400;
		font-size: 14px;
		line-height: 1.5;
	}
`;

const Mission = styled.div`
	display: flex;
	flex-direction: column;
	// flex: 1;
	padding: 20px;
	background: rgba(255,255,255,0.15);
	border: 0.5px dashed white;
	border-radius: 10px;
	box-sizing: border-box;

	align-items: center;
	justify-content: center;

	.mission-header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.mission-tag {
		display: flex;
		padding: 4px 12px;
		background-color: white;
		border-radius: 30px;
		height: 30px;
		box-sizing: border-box;
		margin-bottom: 18px;
		
		> span {
			color: ${props => props.theme.colors.gray80};
			font-weight: 500;
			font-size: 14px;
			line-height: 1.5;
		}
	}

	.mission-title {
		font-weight: 700;
		font-size: 24px;
		line-height: 29px;
		color: white;
		margin-bottom: 4px;
	}

	.mission-remaining-time {
		font-weight: 500;
		font-size: 12px;
		line-height: 1.5;
		color: white;
		margin-bottom: 49px;
	}

	.mission-upload {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

	}

	.mission-upload-button {
		margin-top: 25px;
		color: ${props=>props.theme.colors.gray5};
		font-weight: 500;
		font-size: 14px;
		line-height: 1.5;
	}
`;

const MOCK_NOTIFICATIONS = [
	{ title: "hello", text: "world", createdAt: new Date() },
];

const mission = {
	days: 12,
	title: "비밀봉지 쓰지않기",
	description: "우리가 일회용으로 받는 비닐봉지는 사실 37회를 사용해야하지만 지구에 건강하다고 해요. 오늘 하루는 비닐봉지를 안 받아보는 건 어때요? 👀",
	isCompleted: false,
	type: "Mountain",
};


function MyPage() {
	const theme = useTheme();
	const [ showNotification, setShowNotification ] = useState(false);
	const [ showMissionModal, setShowMissionModal ] = useState(false);
	const [ imageSrc, setImageSrc ] = useState("");
	const [ remainingTime, setRemainingTime ] = useState("");
	const iconPath = `/image/today/${mission.type}-${mission.isCompleted ? "completed" : "progress"}.svg`;

	function updateRemainingTime() {
		const remainingTime = moment().endOf("day").diff(moment());
		const duration = moment.duration(remainingTime);
		const hours = duration.hours().toString().padStart(2, '0');
		const minutes = duration.minutes().toString().padStart(2, '0');
		const formatted = `${hours}:${minutes}`; 
		setRemainingTime(formatted);
	}
	
	useEffect(() => {
		updateRemainingTime();
		setInterval(updateRemainingTime, 1000);

		function listener(event: any) {
			const { file } = JSON.parse(event.data);
			setImageSrc(`data:image/jpg;base64,${file.base64}`);
			setShowMissionModal(true);
		};

		if (window.ReactNativeWebView) {
			/** android */
			document.addEventListener("message", listener);
			/** ios */
			window.addEventListener("message", listener);
		}
		return () => {
			if (window.ReactNativeWebView) {
				document.removeEventListener("message", listener);
				window.removeEventListener("message", listener);
			}
		}
	}, []);

	const sendCameraRequest = () => {
		if (window.ReactNativeWebView) {
			window.ReactNativeWebView.postMessage(JSON.stringify({ type: "REQ_CAMERA_PERMISSION"}));
		} else {
			alert("모바일 환경이 아닙니다.");
		}
	}
	
	return (
		<DefaultLayout>
			<StickyHeader>
				<Header>
					<Title>오늘의 미션</Title>
					<Image
						src={BellImage}
						alt="bell Image"
						onClick={() => setShowNotification(true)}
					/>
				</Header>
			</StickyHeader>
			<Content>
				<Tooltip>
					<span className="message">{mission.description}</span>
				</Tooltip>
				<Mission onClick={sendCameraRequest}>
					<div className="mission-header">
						<div className="mission-tag">
							<span>#{mission.days} 미션</span>
						</div>
						<div className="mission-title">{mission.title}</div>
						<div className="mission-remaining-time">
							{mission.isCompleted ?  "미션 수행 완료" : `${remainingTime} 남음`}
						</div>
					</div>
					
					<div className="mission-upload">
						<Image
							height={173}
							width={173}
							src={iconPath}
							alt={"icon of Mission"}
							className="mission-icon"
						/>
						<div className="mission-upload-button">미션 인증하기</div>
					</div>
				</Mission>
			</Content>
			<Modal title="알림" onBack={() => setShowNotification(false)} show={showNotification}>
				<NotificationSection notifications={MOCK_NOTIFICATIONS} />
			</Modal>
			{imageSrc && <Modal title="인증 사진" onBack={() => setShowMissionModal(false)} show={showMissionModal}>
				<img
					width={"260px"}	
					height={"260px"}
					src={imageSrc}
					alt={"image of Mission"}
				/>
			</Modal>}
		</DefaultLayout>
	);
}

export default MyPage;
