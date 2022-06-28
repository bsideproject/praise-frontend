import styled from "styled-components";
import MissionCard from "./mission-card";

const SectionContainer = styled.section`
	padding: 24px 16px 24px 16px;
	display: flex;
	row-gap: 16px;
	flex-direction: column;
	border-bottom: 1px ${({ theme }) => theme.colors.gray10} solid;
`;

const MissionCardContainer = styled.div`
	display: flex;
	column-gap: 6px;
`;

const SectionTitle = styled.div`
	font-size: 14px;
	line-height: 21px;
	font-weight: 500;
`;

function MissionStatusSection() {
	return (
		<SectionContainer>
			<SectionTitle>미션 현황</SectionTitle>
			<MissionCardContainer>
				<MissionCard type="TOTAL" number={60} />
				<MissionCard type="COMPLETED" number={24} />
				<MissionCard type="UNCOMPLETED" number={36} />
			</MissionCardContainer>
		</SectionContainer>
	);
}

export default MissionStatusSection;
