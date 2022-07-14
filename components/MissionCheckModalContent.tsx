/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Smiley, SmileyMeh, SmileyXEyes } from "phosphor-react";
import styled from "styled-components";
import Button from "./Button";
import MissionEvaluationItem from "./MissionEvalutionItem";

interface MissionCardProps {
	imageSrc: string;
}

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0px 18px 36px 18px;
	font-family: 'Noto Sans KR', sans-serif;

	.mission-survey {
		margin-top: 18px;
		font-size: 14px;
		font-weight: 400;
		color: white;
	}

	.mission-evaluation {
		margin-top: 12px;
		box-sizing: border-box;
		padding-left: 32px;
		padding-right 32px;
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.mission-actions {
		margin-top: 24px;
		display: flex;
		width: 100%;
		justify-content: space-between;
		flex-direction: row;

		button {
			width: 100%;
			margin: 0px;
			padding-top: 8px;
			padding-bottom: 8px;
			color: white;
			font-size: 16px;
			line-height: 24px;
			height: auto;
			font-weight: 400;
			background: ${props => props.theme.colors.secondary20};

			&:first-of-type {
				margin-right: 12px;
			}
		}
	}
`;



function MissionCheckModalContent({ imageSrc }: MissionCardProps) {
	const [ evaluation, setEvaluation ] = useState<"EASY" | "NORMAL" | "HARD" | undefined>();
	return (
		<Content>
			<img
				width={"260px"}	
				height={"260px"}
				src={imageSrc}
				alt={"image of Mission"}
			/>
			<div className="mission-survey">오늘 미션은 어떠셨나요?</div>
			<div className="mission-evaluation">
				<MissionEvaluationItem 
					icon={
						<Smiley
							alt="EASY Icon"
							size={40}
							weight="light"
						/>
					}
					difficulty="EASY"
					evaluation={evaluation}
					setEvaluation={setEvaluation}
				/>
				<MissionEvaluationItem 
					icon={
						<SmileyMeh
							alt="Normal Icon"
							size={40}
							weight="light"
						/>
					}
					difficulty="NORMAL"
					evaluation={evaluation}
					setEvaluation={setEvaluation}
				/>
				<MissionEvaluationItem 
					icon={
						<SmileyXEyes
							alt="Hard Icon"
							size={40}
							weight="light"
						/>
					}
					difficulty="HARD"
					evaluation={evaluation}
					setEvaluation={setEvaluation}
				/>
			</div>
			<div className="mission-actions">
				<Button>재촬영</Button>
				<Button>인증 완료</Button>
			</div>
		</Content>
	);
}

export default MissionCheckModalContent;