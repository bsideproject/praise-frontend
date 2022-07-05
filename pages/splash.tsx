import type { NextPage } from "next";
import * as React from 'react';
import Button from "../components/Button";
import SwipeView from "../components/SwipeView";
import { PageContainer } from "../src/layouts";


const SplashPage: NextPage = () => {
	const [activeStep, setActiveStep] = React.useState(0);
	const maxSteps = 4;

	return (
		<PageContainer>
			<SwipeView 
				activeStep={activeStep}
				setActiveStep={setActiveStep}
				maxSteps={maxSteps}
			/>
			{ activeStep + 1 === maxSteps 
				? <Button onClick={() => location.assign("/login")}>시작하기</Button>
				: <Button onClick={() => setActiveStep(prev => prev + 1)}>다음</Button>
			}
		</PageContainer>
	)
};

export default SplashPage;
