import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BadgeView from '../BadgeView';
import TextView from '../TextView';
import variablesBreakpoints from '../../helpers/variablesBreakpoints';

const StyledRange = styled.div`
  width: ${(props) => props.width};
  padding-block: ${(props) => props.paddingY};
`;

const RangeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RangeHeaderTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const RangeHeaderValue = styled.div`
  border-bottom: 1px solid ${variablesBreakpoints.insteadOfWhite};
  margin-right: 10px;
  padding-bottom: 10px;
`;

const RangeBody = styled.input`
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  height: 20px;
  width: 100%;
  margin-top: 25px;
  border-radius: 10px;
  background: linear-gradient(
    ${variablesBreakpoints.primaryColor},
    ${variablesBreakpoints.insteadOfWhite}
  );
  box-shadow: 0px 4px 4px ${variablesBreakpoints.shadowColor};

  &::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background-color: ${variablesBreakpoints.insteadOfWhite};
    box-shadow: 0px 4px 12px ${variablesBreakpoints.shadowColor};
  }
`;

function RangeView({ name, range, unit, value, onChange, width, paddingY }) {
  return (
    <StyledRange {...{ width, paddingY }}>
      <RangeHeader>
        {useCallback(
          <RangeHeaderTitle>
            <TextView fontSize="1.5em">{name}</TextView>
            <BadgeView marginX="10px">
              <TextView
                color={variablesBreakpoints.backgroundColor}
                fontSize="1.25em"
                fontWeight="bold"
              >
                {unit}
              </TextView>
            </BadgeView>
          </RangeHeaderTitle>,
          [name, unit]
        )}
        {useCallback(
          <RangeHeaderValue>
            <TextView fontSize="1.25em" fontWeight="600">
              {value}
            </TextView>
          </RangeHeaderValue>,
          [value]
        )}
      </RangeHeader>
      {useCallback(
        <RangeBody
          type="range"
          {...{ min: range.min, max: range.max, value, onChange }}
        />,
        [range, value, onChange]
      )}
    </StyledRange>
  );
}

RangeView.propTypes = {
  name: PropTypes.string.isRequired,
  range: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
  }).isRequired,
  unit: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onChange: PropTypes.func.isRequired,
  width: PropTypes.string,
  paddingY: PropTypes.string,
};

RangeView.defaultProps = {
  width: '500px',
  paddingY: '1em',
};

export default RangeView;
