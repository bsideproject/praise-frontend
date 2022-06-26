import type { NextPage } from "next";
import Button from "../components/Button";
import Screen from "../components/Screen";
import styled from "styled-components";
import Image from 'next/image';

const LoginView = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 375;
    flex-grow: 1;
    height: 100%;
    background-color: ${props => props.theme.colors.gray90};

    .login-image-wrapper {
        display: flex;
        overflow: hidden;
        margin-top: 5%;
        width: 100%;
        height: 53%;
        align-items: center;
        justify-content: center;
    }

    .login-message {
        display: flex;
        flex-direction: column;
        color: ${props => props.theme.colors.white};;
        height: 150px;
        margin-left: 21px;
        margin-right: 21px;
        
        align-items: center;
        justify-contents: center;

        .login-message-title {
            font-size: 32px;
            font-weight: 700;
            margin-bottom: 21px;
            -webkit-text-stroke: 1px black;
        }
        
        .login-message-description {
            display: flex;
            flex-direction: column;
            font-size: 16px;
            line-height: 145%;
            font-weight: 400;
            white-space: pre-line;
            text-align: center;
        }
    }
`;

const KakaoLoginButton = styled.button`
	display: flex;
	height: 48px;
	margin: 24px 17px;
	align-items: center;
	justify-content: center;
	font-family: 'Noto Sans KR', sans-serif;
	font-weight: 700;
	font-size: 14px;
	border-radius: 5px;
    margin-top: auto;
    margin-bottom: 10%;
	color: ${props => props.theme.colors.gray80};
	background: ${props => props.theme.colors.yellow.full};
`;

const LoginPage: NextPage = () => {
	return (
        <div>
            <Screen>
                <LoginView>
                    <div className="login-image-wrapper">
                        <Image
                            height={300}
                            width={300}
                            src={'/image/login/login1.png'}
                            alt={'/image/login/login1.png'}
                        />
                    </div>
                    <div className="login-message">
                        <div className="login-message-title">제로라이프</div>
                        <div className="login-message-description">
                            {`제로웨이스트와 함께하는\n 건강한 지구 만들기`}
                        </div>
                    </div>
                    <KakaoLoginButton>
                        카카오톡으로 시작하기
                    </KakaoLoginButton>
                </LoginView>
            </Screen>
        </div>
    )
};

export default LoginPage;