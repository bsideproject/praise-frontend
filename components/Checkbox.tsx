import React from 'react'
import styled from 'styled-components'

const CheckboxContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24ppx;
  vertical-align: middle;
`

const Icon = styled.svg`
  fill: none;
  stroke: ${props => props.theme.colors.gray80};
  stroke-width: 3px;
`

const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => (props.checked ? props.theme.colors.yellow.tintDark : props.theme.colors.white)};
  border-radius: 3px;
  transition: all 150ms;

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')}
  }

  &:hover {
    cursor: pointer;
  }
`

interface CheckboxProps {
    className?: string, 
    checked: boolean, 
    onClick: React.FormEventHandler<HTMLDivElement>, 
}

const Checkbox = ({ className, checked, onClick } : CheckboxProps) => (
  <CheckboxContainer className={className}>
    <StyledCheckbox checked={checked} onClick={onClick}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12"/>
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
)

export default Checkbox
