import { ArrowLeft } from "phosphor-react";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const StyledModalBody = styled.div`
	padding-top: 10px;
`;

const StyledModal = styled.div`
	background-color: ${(props) => props.theme.colors.background};
	width: 100%;
	height: 100%;
	padding: 0px 16px;
`;

const StyledModalOverlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 99;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Title = styled.div`
	font-size: 24px;
	line-height: 150%;
	font-weight: 500;
	text-align: center;
	flex: 1;
	color: ${(props) => props.theme.colors.white};
`;

const ModalHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 62px;
	border-bottom: 1px ${({ theme }) => theme.colors.gray10} solid;
`;

interface ModalProps {
	show: boolean;
	onBack: () => void;
	children: React.ReactNode;
	title: string;
}

function Modal({ show, onBack, children, title }: ModalProps) {
	const [isBrowser, setIsBrowser] = useState(false);

	useEffect(() => {
		setIsBrowser(true);
	}, []);

	useEffect(() => {
		setIsBrowser(true);
	}, []);

	const handleBack = () => {
		onBack();
	};

	const modalContent = show ? (
		<StyledModalOverlay>
			<StyledModal>
				<ModalHeader>
					<ArrowLeft size={28} color="#FFFFFF" onClick={handleBack} />
					<Title>{title}</Title>
				</ModalHeader>
				<StyledModalBody>{children}</StyledModalBody>
			</StyledModal>
		</StyledModalOverlay>
	) : null;

	if (isBrowser) {
		return ReactDOM.createPortal(
			modalContent,
			document.getElementById("modal-root") as HTMLElement
		);
	} else {
		return null;
	}
}

export default Modal;
