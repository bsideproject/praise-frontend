import { ReactNode } from "react";
import styled from "styled-components";

const MissionEvaluationItemWrapper = styled.div<{ selected?: boolean }>`
	display: flex;
	flex-direction: column;
	align-items: center;

	svg > circle:first-of-type {
		fill: ${props => props.selected ? props.theme.colors.secondary20 : props.theme.colors.gray40};
	}

	span {
		color: white;
		font-size: 14px;
		font-weight: ${props => props.selected ? 600 : 400};
		margin-top: 4px;
	}
`
const difficultyResource = {
    EASY: "쉬움",
    NORMAL: "보통",
    HARD: "어려움"
}

interface MissionEvaluationItemProps {
    difficulty: "EASY" | "NORMAL" | "HARD", 
    icon: ReactNode,
    evaluation: "EASY" | "NORMAL" | "HARD" | undefined,
    setEvaluation: Function
}

const MissionEvaluationItem = (props: MissionEvaluationItemProps) => {

    return (
        <MissionEvaluationItemWrapper
            key={props.difficulty}
            selected={props.evaluation === props.difficulty}
            onClick={() => props.setEvaluation(props.difficulty)}
        >
            {props.icon}
            <span>{difficultyResource[props.difficulty]}</span>
        </MissionEvaluationItemWrapper>
    )
}

export default MissionEvaluationItem;