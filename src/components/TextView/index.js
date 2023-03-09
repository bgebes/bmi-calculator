import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import variablesBreakpoints from '../../helpers/variablesBreakpoints';

function TextView({
  children,
  color,
  fontSize,
  fontWeight,
  isHyperLink,
  href,
}) {
  const StyledText = styled.p`
    color: ${(props) => props.color};
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWeight};
  `;

  const StyledHyperLink = styled.a`
    color: ${(props) => props.color};
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWeight};
    text-decoration: none;
  `;

  const StyledElement = isHyperLink ? StyledHyperLink : StyledText;

  return (
    <StyledElement
      href={isHyperLink ? href : null}
      {...{
        children, color, fontSize, fontWeight,
      }}
    />
  );
}

TextView.propTypes = {
  children: PropTypes.element.isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.string,
  isHyperLink: PropTypes.bool,
  href: PropTypes.string,
};

TextView.defaultProps = {
  color: variablesBreakpoints.insteadOfWhite,
  fontSize: '1em',
  fontWeight: 'normal',
  isHyperLink: false,
  href: '#',
};

export default TextView;
