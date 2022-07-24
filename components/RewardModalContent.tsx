import styled, { useTheme } from "styled-components";
import RewardIcon from "../public/icon/RewardIcon.svg";
import Image from "next/image";
import Button from "./Button";

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 18px;
    padding-top: 30px;
    font-family: 'Noto Sans KR', sans-serif;

    .reward-message {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
        font-weight: 400;
        line-height: 1.5;
        margin-top: 20px;
        margin-bottom: 48px;

        .reward-message-title {
            font-size: 20px;
            margin-bottom: 4px;
        }

        .reward-message-description {
            font-size: 14px;
        }
    }

    button {
        margin: 24px;
        width: 100%;
    }
`

function RewardModalContent({ rewardId }: { rewardId: number }) {
    const theme = useTheme();

    return (
        <Content>
            <Image
				width={200}	
				height={130}
				src={RewardIcon}
				alt={"icon of Reward"}
                className="reward-icon"
			/>
            <div className="reward-message">
                <div className="reward-message-title">미션 6개 달성!</div>
                <div className="reward-message-description">달성왕 드려요!</div>
            </div>
            <Button 
                color={"white"}
                background={theme.colors.secondary20}
                onClick={() => location.assign(`/my-rewards?animate=1&state=${rewardId}`)}
            >
                리워드 받기
            </Button>
        </Content>
    )
}

export default RewardModalContent;