import React from 'react';
import styled from 'styled-components';
import { calculateBMI, insertEntry } from '../../actions/actions';
import { useBMI } from '../../contexts/BMIContext';
import variablesBreakpoints from '../../helpers/variablesBreakpoints';
import ButtonView from '../ButtonView';
import RangeView from '../RangeView';
import TextView from '../TextView';

const StyledContent = styled.main`
  min-height: calc(100vh - 69px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 8.7vh;
`;
const StyledContentTools = styled.div`
  & > div {
    margin-top: 30px;
  }
`;
const StyledContentImage = styled.img`
  border-width: 4px;
  border-style: solid;
  border-image: linear-gradient(
      ${variablesBreakpoints.primaryColor},
      ${variablesBreakpoints.insteadOfWhite}
    )
    1;
`;

function CalculatorContent() {
  const [BMIInfo, setBMIInfo] = useBMI();

  const heightRangeView = (
    <RangeView
      name="Height"
      range={{ min: 0, max: 300 }}
      unit="cm"
      value={BMIInfo.height}
      onChange={(event) => {
        setBMIInfo((state) => ({
          ...state,
          height: parseInt(event.target.value, 10),
        }));
      }}
    />
  );
  const weightRangeView = (
    <RangeView
      name="Weight"
      range={{ min: 0, max: 500 }}
      unit="kg"
      value={BMIInfo.weight}
      onChange={(event) => {
        setBMIInfo((state) => ({
          ...state,
          weight: parseInt(event.target.value, 10),
        }));
      }}
    />
  );

  const callback = (formula) => {
    setBMIInfo((state) => ({ ...state, bmi: formula }));
  };

  const onClick = () => {
    const bmi = calculateBMI(BMIInfo.height, BMIInfo.weight, callback);
    insertEntry(BMIInfo.height, BMIInfo.weight, bmi);
  };

  const calculateButton = (
    <ButtonView marginY="30px" onClick={onClick}>
      <TextView fontSize="1.5em" fontWeight="600">
        Calculate BMI
      </TextView>
    </ButtonView>
  );

  return (
    <StyledContent>
      <StyledContentTools>
        {heightRangeView}
        {weightRangeView}
        {calculateButton}
      </StyledContentTools>
      <StyledContentImage
        src="/assets/images/contentImage.jpg"
        alt="Content Image"
      />
    </StyledContent>
  );
}

export default CalculatorContent;
