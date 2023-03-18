import React, { useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import variablesBreakpoints from '../../helpers/variablesBreakpoints';

const StyledText = styled.span`
  color: ${(props) => props.color};
  opacity: ${(props) => props.opacity};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  white-space: pre-line;
`;

const StyledHyperLink = styled.a`
  color: ${(props) => props.color};
  opacity: ${(props) => props.opacity};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  text-decoration: ${(props) => props.decoration};
`;

const StyledPageLink = styled(Link)`
  color: ${(props) => props.color};
  opacity: ${(props) => props.opacity};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  text-decoration: ${(props) => props.decoration};
`;

function TextView({
  children,
  color,
  decoration,
  opacity,
  fontSize,
  fontWeight,
  isHyperLink,
  isPageLink,
  href,
}) {
  let StyledElement;
  if (isPageLink) {
    StyledElement = StyledPageLink;
  } else if (isHyperLink) {
    StyledElement = StyledHyperLink;
  } else {
    StyledElement = StyledText;
  }

  return useCallback(
    <StyledElement
      to={isPageLink ? href : null}
      href={isHyperLink ? href : null}
      {...{
        children,
        color,
        decoration,
        opacity,
        fontSize,
        fontWeight,
      }}
    />,
    [
      children,
      color,
      opacity,
      fontSize,
      fontWeight,
      isPageLink,
      isHyperLink,
      href,
    ]
  );
}

TextView.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.any,
  ]).isRequired,
  color: PropTypes.string,
  decoration: PropTypes.string,
  opacity: PropTypes.number,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  isHyperLink: PropTypes.bool,
  isPageLink: PropTypes.bool,
  href: PropTypes.string,
};

TextView.defaultProps = {
  color: variablesBreakpoints.insteadOfWhite,
  decoration: 'none',
  opacity: 1,
  fontSize: '1em',
  fontWeight: 'normal',
  isHyperLink: false,
  isPageLink: false,
  href: '#',
};

export default TextView;
