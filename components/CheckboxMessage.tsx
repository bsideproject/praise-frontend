import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Checkbox from "./Checkbox";

const CheckboxMessageWrapper = styled.div`
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.white};

    height: 24px;

    .checkbox {
        margin-right: 16px;
    }

    .message {
        font-size: 14px;
        line-height: 21px;
        font-weight: 400;
    }

    &:hover {
        cursor: pointer;
    }
`

const CheckboxMessage = (props: { message: string, checked: boolean, handleChange: Function }) => {
    const [ checked, setChecked ] = useState(false);
    const checkboxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setChecked(props.checked);
    }, [props.checked])

    const handleChange = (event: any) => {
        setChecked(prev => {
            const state = !prev;
            props.handleChange?.(state);
            return state;
        });
    }

    return (
        <CheckboxMessageWrapper className="checkbox-message" onClick={() => { checkboxRef?.current?.click() }}>
            <Checkbox className="checkbox" onCLick={handleChange} checked={checked} checkboxRef={checkboxRef}/>
            <span className="message">{props.message}</span>
        </CheckboxMessageWrapper>
    )
}

export default CheckboxMessage;