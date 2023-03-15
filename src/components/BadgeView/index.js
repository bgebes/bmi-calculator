import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import variablesBreakpoints from '../../helpers/variablesBreakpoints';

function BadgeView({
  children,
  color,
  bgColor,
  marginX,
  marginY,
  paddingX,
  paddingY,
}) {
  const StyledBadge = styled.div`
    color: ${(props) => props.color};
    background-color: ${(props) => props.bgColor};
    margin-inline: ${(props) => props.marginX};
    margin-block: ${(props) => props.marginY};
    padding-inline: ${(props) => props.paddingX};
    padding-block: ${(props) => props.paddingY};
    border-radius: 10px;
    box-shadow: 0px 4px 4px ${variablesBreakpoints.shadowColor};
  `;

  return (
    <StyledBadge
      {...{
        children,
        color,
        bgColor,
        marginX,
        marginY,
        paddingX,
        paddingY,
      }}
    />
  );
}

BadgeView.propTypes = {
  children: PropTypes.element.isRequired,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  marginX: PropTypes.string,
  marginY: PropTypes.string,
  paddingX: PropTypes.string,
  paddingY: PropTypes.string,
};

BadgeView.defaultProps = {
  color: variablesBreakpoints.backgroundColor,
  bgColor: variablesBreakpoints.primaryColor,
  marginX: '0px',
  marginY: '0px',
  paddingX: '15px',
  paddingY: '4px',
};

export default BadgeView;
