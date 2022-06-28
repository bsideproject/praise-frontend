import type { NextPage } from "next";
import Screen from "../components/Screen";
import styled, { useTheme } from "styled-components";
import Image from 'next/image';
import { useState } from "react";
import Button from "../components/Button";
import isLoggedIn from "../hooks/isLoggedIn";
import CheckboxMessage from "../components/CheckboxMessage";
import { PageContainer } from "../src/layouts";

const ConsentView = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 375;
    flex-grow: 1;
    height: 100%;
    
    padding: 10px 0px;

    .consent-navigation {
        height: 32px;
        margin-bottom: 36px;
    }

    .consent-title {
        font-size: 20px;
        font-weight: 500;
        line-height: 30px;
        color: ${props => props.theme.colors.white};
        margin-bottom: 242px;
    }

    .checkbox-message {
        margin-bottom: 24px;
    }

    .consent-view-divider {
        width: 100%;
        height: 1px;
        margin-top: -1px;
        margin-bottom: 18px;
        background-color: ${props => props.theme.colors.gray60};
    }

    .consent-sign-up-button {
        margin-top: auto;
    }
`;


const agreementItems = [
    { key: "age", message: "만 14세 이상입니다(필수)", required: true }, 
    { key: "service", message: "서비스 이용약관(필수)", required: true }, 
    { key: "privateData", message: "개인정보 수집 및 이용(필수)", required: true }, 
    { key: "marketing", message: "마켓팅 정보 수신동의(선택)", required: false }, 
];

const Consent: NextPage = () => {
    const id = isLoggedIn();
    const [agreementList, setAgreementList] = useState<string[]>([]);
    const theme = useTheme();
    
	return (
        <PageContainer>
            <ConsentView>
                <div className="consent-navigation">
                    <Image
                        height={32}
                        width={32}
                        src={'/image/ArrowLeft.png'}
                        alt={'/image/ArrowLeft.png'}
                    />
                </div>
                <div className="consent-title">
                    약관 동의
                </div>
                <CheckboxMessage 
                    message={"제로라이프 이용약관 전체 동의"} 
                    checked={agreementList.length === agreementItems.length} 
                    handleChange={(checked: boolean) => { 
                        if(checked) setAgreementList(agreementItems.map(a => a.key));
                        else setAgreementList([]); 
                    }}
                />
                <div className="consent-view-divider"/>
                {
                    agreementItems.map(agreementItem => {
                        return <CheckboxMessage 
                            message={agreementItem.message}
                            key={agreementItem.key}
                            checked={agreementList.includes(agreementItem.key)} 
                            handleChange={(checked: boolean) => {
                                if(checked) setAgreementList(prev => prev.concat(agreementItem.key));
                                else setAgreementList(prev => prev.filter(item => item !== agreementItem.key));
                            }}
                        />
                    })
                }
                <Button 
                    disabled={!agreementItems.every(item => !item.required || agreementList.includes(item.key))}
                    className="consent-sign-up-button"
                    color={theme.colors.white}
                    background={theme.colors.secondary20}
                    onClick={() => console.log("회원가입..")}
                >
                    회원 가입
                </Button>
            </ConsentView>
        </PageContainer>
    )
};

export default Consent;