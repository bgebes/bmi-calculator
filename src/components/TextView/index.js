import React, { useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import variablesBreakpoints from '../../helpers/variablesBreakpoints';

const StyledText = styled.p`
  color: ${(props) => props.color};
  opacity: ${(props) => props.opacity};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
`;

const StyledHyperLink = styled.a`
  color: ${(props) => props.color};
  opacity: ${(props) => props.opacity};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  text-decoration: none;
`;

function TextView({
  children,
  color,
  opacity,
  fontSize,
  fontWeight,
  isHyperLink,
  href,
}) {
  const StyledElement = isHyperLink ? StyledHyperLink : StyledText;

  return useCallback(
    <StyledElement
      href={isHyperLink ? href : null}
      {...{
        children,
        color,
        opacity,
        fontSize,
        fontWeight,
      }}
    />,
    [children, color, opacity, fontSize, fontWeight]
  );
}

TextView.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  opacity: PropTypes.number,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  isHyperLink: PropTypes.bool,
  href: PropTypes.string,
};

TextView.defaultProps = {
  color: variablesBreakpoints.insteadOfWhite,
  opacity: 1,
  fontSize: '1em',
  fontWeight: 'normal',
  isHyperLink: false,
  href: '#',
};

export default TextView;
