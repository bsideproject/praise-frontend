import styled from "styled-components";
import MissionCard, { MissionType } from "./MissionCard";

const SectionContainer = styled.section`
	padding: 24px 16px 24px 16px;
	display: flex;
	row-gap: 16px;
	flex-direction: column;
	border-bottom: 1px ${({ theme }) => theme.colors.gray10} solid;
`;

const MissionCardContainer = styled.ul`
	display: flex;
	column-gap: 6px;
`;

const SectionTitle = styled.div`
	font-size: 14px;
	line-height: 21px;
	font-weight: 500;
	color: ${(props) => props.theme.colors.white};
`;

const MissionLinks: { name: MissionType; queryParams: string; text: string }[] =
	[
		{
			name: "TOTAL",
			queryParams: "all",
			text: "총 미션",
		},
		{
			name: "COMPLETED",
			queryParams: "completed",
			text: "완료 미션",
		},
		{
			name: "UNCOMPLETED",
			queryParams: "uncompleted",
			text: "미완료 미션",
		},
	];

function MissionStatusSection() {
	return (
		<SectionContainer>
			<SectionTitle>미션 현황</SectionTitle>
			<MissionCardContainer>
				{MissionLinks.map((missionLink) => (
					<MissionCard
						key={missionLink.name}
						type={missionLink.name}
						text={missionLink.text}
						queryParams={missionLink.queryParams}
						number={10}
					/>
				))}
			</MissionCardContainer>
		</SectionContainer>
	);
}

export default MissionStatusSection;
