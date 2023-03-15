import React, { useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import variablesBreakpoints from '../../helpers/variablesBreakpoints';

const StyledButton = styled.button`
  background-color: ${(props) => props.bgColor};
  margin-inline: ${(props) => props.marginX};
  margin-block: ${(props) => props.marginY};
  padding-inline: ${(props) => props.paddingX};
  padding-block: ${(props) => props.paddingY};
  border: 0px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0px 4px 8px ${variablesBreakpoints.shadowColor};
`;

function ButtonView({
  children,
  onClick,
  bgColor,
  marginX,
  marginY,
  paddingX,
  paddingY,
}) {
  return useCallback(
    <StyledButton
      {...{ children, onClick, bgColor, marginX, marginY, paddingX, paddingY }}
    />,
    [children, onClick, bgColor, marginX, marginY, paddingX, paddingY]
  );
}

ButtonView.propTypes = {
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func,
  bgColor: PropTypes.string,
  marginX: PropTypes.string,
  marginY: PropTypes.string,
  paddingX: PropTypes.string,
  paddingY: PropTypes.string,
};

ButtonView.defaultProps = {
  bgColor: variablesBreakpoints.primaryColor,
  onClick: () => {},
  marginX: '0',
  marginY: '0',
  paddingX: '50px',
  paddingY: '25px',
};

export default ButtonView;
