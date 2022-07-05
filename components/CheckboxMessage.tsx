import { CaretRight } from "phosphor-react";
import { useEffect, useRef, useState } from "react";
import styled, { useTheme } from "styled-components";
import Checkbox from "./Checkbox";
import ConsentDescription from "./ConsentDescription";

const CheckboxMessageWrapper = styled.div`
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.white};

    height: 24px;

    .checkbox {
        margin-right: 16px;
    }

    .checkbox-message-extend-icon {
        margin-left: auto;
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

interface CheckboxMessageProps {
    message: string, 
    checked: boolean, 
    extend?: boolean,
    agreementItem?: { title: string, description: string },
    handleChange: Function
}

const CheckboxMessage = (props: CheckboxMessageProps) => {
    const [ checked, setChecked ] = useState(false);
    const [ visible, setVisible ] = useState(false);
    const theme = useTheme();
    const expandRef = useRef(null);

    useEffect(() => {
        setChecked(props.checked);
    }, [props.checked])

    const handleChange = (e: any) => {
        e.stopPropagation()
        setChecked(prev => {
            const state = !prev;
            props.handleChange?.(state);
            return state;
        });
    }

    return (
        <CheckboxMessageWrapper 
            className="checkbox-message" 
            onClick={() => { props.agreementItem && setVisible(true) }}
        >
            <Checkbox className="checkbox" onClick={handleChange} checked={checked} />
            <span className="message">{props.message}</span>
            {props.agreementItem && 
                <CaretRight 
                    className="checkbox-message-extend-icon"
                    size={16} 
                    weight="bold" 
                    color={theme.colors.gray40}
                    onClick={() => setVisible(true)}
                />
            }       
            {props.agreementItem && visible &&
                <ConsentDescription 
                    agreementItem={props.agreementItem}
                    setVisible={setVisible}
                />
            }
        </CheckboxMessageWrapper>
    )
}

export default CheckboxMessage;