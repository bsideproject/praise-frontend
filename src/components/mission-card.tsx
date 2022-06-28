import { Calendar, CalendarCheck, CalendarX } from "phosphor-react";
import { ReactNode } from "react";
import styled from "styled-components";

type MissionType = "TOTAL" | "COMPLETED" | "UNCOMPLETED";

interface MissionCardProps {
	type: MissionType;
	number: number;
}

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

const MissionCardContainer = styled.div`
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

const MissionIcon: Record<MissionType, ReactNode> = {
	COMPLETED: <CalendarCheck size={28} />,
	TOTAL: <Calendar size={28} />,
	UNCOMPLETED: <CalendarX size={28} />,
};

function MissionCard({ type, number }: MissionCardProps) {
	return (
		<MissionCardContainer>
			{MissionIcon[type]}
			<TextContainer>
				<Text>미완료 미션</Text>
				<Text>
					<StrongText>{number}</StrongText>개
				</Text>
			</TextContainer>
		</MissionCardContainer>
	);
}

export default MissionCard;
