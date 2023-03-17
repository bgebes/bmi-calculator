import React, { useCallback } from 'react';
import styled from 'styled-components';
import variablesBreakpoints from '../../helpers/variablesBreakpoints';
import TextView from '../TextView';

const StyledInlineTextParts = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledToolbar = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${(props) => props.innerWidth / 3}px;
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 20px;
`;

function Header() {
  const title = (
    <StyledInlineTextParts>
      <TextView
        color={variablesBreakpoints.primaryColor}
        fontSize="1.5em"
        fontWeight="bold"
        isPageLink
        href="/"
      >
        BMI&nbsp;
      </TextView>
      <TextView fontSize="1.5em" fontWeight="bold" isPageLink href="/">
        Calculator
      </TextView>
    </StyledInlineTextParts>
  );

  const { innerWidth } = window;

  const toolbar = useCallback(
    <StyledToolbar {...{ innerWidth }}>
      <TextView
        opacity={0.7}
        fontSize="1.5em"
        fontWeight="bold"
        isPageLink
        href="/"
      >
        Calculate
      </TextView>
      <StyledInlineTextParts href="#">
        <TextView
          opacity={0.7}
          fontSize="1.5em"
          fontWeight="bold"
          isPageLink
          href="/what-is-the-bmi"
        >
          What's the
        </TextView>
        <TextView
          color={variablesBreakpoints.primaryColor}
          opacity={0.7}
          fontSize="1.5em"
          fontWeight="bold"
          isPageLink
          href="/what-is-the-bmi"
        >
          &nbsp;BMI?
        </TextView>
      </StyledInlineTextParts>
      <TextView
        opacity={0.7}
        fontSize="1.5em"
        fontWeight="bold"
        isPageLink
        href="/history"
      >
        History
      </TextView>
    </StyledToolbar>,
    [innerWidth]
  );

  return (
    <StyledHeader>
      {title}
      {toolbar}
    </StyledHeader>
  );
}

export default Header;
