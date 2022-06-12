import type { NextPage } from "next";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
	background-color: #ABABAB;
	padding: 30px;
	box-sizing: border-box;
	width: 100%;
	height: 100vh;
	overflow: auto;

	> div {
		white-space: pre-wrap;
	}
`;

const Home: NextPage = () => {
	const [message, setMessage] = useState<string>("Default Message");

	useEffect(() => {
		const listener = event => {
		const { message, file } = JSON.parse(event.data);
			console.log(message);
			setMessage(JSON.stringify(file));
		};

		if (window.ReactNativeWebView) {
			/** android */
			document.addEventListener("message", listener);
			/** ios */
			window.addEventListener("message", listener);
		} else {
			alert("모바일 환경이 아닙니다.");
		}
		return () => {
			if (window.ReactNativeWebView) {
				document.removeEventListener("message", listener);
				window.removeEventListener("message", listener);
			}
		}
	}, []);

	return (
		<Wrapper>
			<button
				onClick={()=>{
					if (window.ReactNativeWebView) {
						window.ReactNativeWebView.postMessage(JSON.stringify({ type: "REQ_CAMERA_PERMISSION"}));
					  } else {
						alert("모바일 환경이 아닙니다.");
					  }
				}}
			>
				Send data to App
			</button>
			<div>
				{message}
			</div>
			<i className="ph-smiley"></i>
			<i className="ph-heart-fill"></i>
			<i className="ph-cube-thin"></i>
		</Wrapper>
	);
};

export default Home;
