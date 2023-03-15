import React from 'react';
import styled from 'styled-components';
import RangeView from '../RangeView';

function Content() {
  const StyledContent = styled.div``;

  const heightRangeView = (
    <RangeView name="Height" range={{ min: 0, max: 300 }} unit="cm" />
  );
  const weightRangeView = (
    <RangeView name="Weight" range={{ min: 0, max: 500 }} unit="kg" />
  );

  return (
    <StyledContent>
      {heightRangeView}
      {weightRangeView}
    </StyledContent>
  );
}

export default Content;
