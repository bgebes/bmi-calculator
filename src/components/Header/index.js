import React from 'react';
import styled from 'styled-components';
import hexOpacity from 'hex-opacity';
import variablesBreakpoints from '../../helpers/variablesBreakpoints';
import TextView from '../TextView';

function Header() {
  const colorsWithCustomOpacity = {
    primary: hexOpacity.create(variablesBreakpoints.primaryColor, 0.7),
    white: hexOpacity.create(variablesBreakpoints.insteadOfWhite, 0.7),
  };

  const StyledInlineTextParts = styled.div`
    display: flex;
    flex-direction: row;
  `;

  const title = (
    <StyledInlineTextParts>
      <TextView
        color={variablesBreakpoints.primaryColor}
        fontSize="1.5em"
        fontWeight="bold"
        isHyperLink
      >
        BMI&nbsp;
      </TextView>
      <TextView fontSize="1.5em" fontWeight="bold" isHyperLink>
        Calculator
      </TextView>
    </StyledInlineTextParts>
  );

  const { innerWidth } = window;

  const StyledToolbar = styled.div`
    display: flex;
    justify-content: space-between;
    width: ${innerWidth / 3}px;
  `;

  const toolbar = (
    <StyledToolbar>
      <TextView
        color={colorsWithCustomOpacity.white}
        fontSize="1.5em"
        fontWeight="bold"
        isHyperLink
      >
        Calculate
      </TextView>
      <StyledInlineTextParts href="#">
        <TextView
          color={colorsWithCustomOpacity.white}
          fontSize="1.5em"
          fontWeight="bold"
          isHyperLink
        >
          What's the
        </TextView>
        <TextView
          color={colorsWithCustomOpacity.primary}
          fontSize="1.5em"
          fontWeight="bold"
          isHyperLink
        >
          &nbsp;BMI?
        </TextView>
      </StyledInlineTextParts>
      <TextView
        color={colorsWithCustomOpacity.white}
        fontSize="1.5em"
        fontWeight="bold"
        isHyperLink
      >
        History
      </TextView>
    </StyledToolbar>
  );

  const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: 20px;
  `;

  return (
    <StyledHeader>
      {title}
      {toolbar}
    </StyledHeader>
  );
}

export default Header;
