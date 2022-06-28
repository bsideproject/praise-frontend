import { PageContainer } from "../src/layouts";
import BackArrow from "./BackArrow";
import { createPortal } from "react-dom";
import styled, { useTheme } from "styled-components";
import { ArrowLeft } from "phosphor-react";

const PageContainerOverlay = styled.div`
    position: absolute;
    display: flex;
	flex-direction: column;
	box-sizing: border-box;
    max-width: 100%;
    min-height: 100vh;
    max-height: 100%;
    color: ${props => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.background};
    z-index: 5000;

    @media screen and (min-width: 768px) {
		margin: 0 auto;
		width: 650px;
	}

    .description-container {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        box-sizing: border-box;
        padding: 10px 0px;
        overflow: hidden;
    }

    .consent-navigation {
        height: 32px;
        margin-bottom: 36px;
    }

    .consent-title {
        font-size: 20px;
        font-weight: 500;
        line-height: 30px;
        margin-bottom: 52px;
    }

    .consent-description {
        display: flex;
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
        white-space: pre-line;
        overflow-y: auto;
    }    
`

const ConsentDescription = (props: { setVisible: Function, agreementItem: { title: string, description: string } }) => {
    const theme= useTheme();
    if(typeof window === 'undefined') return <></>;
    const container = document.getElementsByClassName("page-container");
    if(!container) return <></>;

    return createPortal(
        <PageContainerOverlay>
            <div className="description-container">
                <div className="consent-navigation">
                    <ArrowLeft 
                        size={32} 
                        weight="regular" 
                        onClick={(e) => { e.stopPropagation(); props.setVisible(false);}} 
                        color={theme.colors.white}
                    />
                </div>
                <div className="consent-title">
                    {props.agreementItem.title}
                </div>
                <div className="consent-description">
                    {props.agreementItem.description}
                </div>
            </div>
        </PageContainerOverlay>, container[0]);
};

export default ConsentDescription;