import React from 'react';
import styled from 'styled-components';
import variablesBreakpoints from '../../helpers/variablesBreakpoints';
import TextView from '../TextView';

const StyledContent = styled.main`
  min-height: calc(100vh - 69px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledContentCard = styled.div`
  background-color: ${variablesBreakpoints.insteadOfWhite};
  padding: 20px 50px;
  border-radius: 10px;

  & > * {
    padding-block: 2em;
  }
`;
const StyledContentImage = styled.img`
  width: 100%;
  height: 40vh;
  object-fit: cover;
`;

const StyledTitle = styled.div`
  display: flex;
`;

const StyledContentFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: 1em;
`;

function WITBContent() {
  return (
    <StyledContent>
      <StyledContentCard>
        <StyledContentImage src="/assets/images/WITBCoverImage.jpg" />
        <StyledTitle>
          <TextView
            color={variablesBreakpoints.backgroundColor}
            fontWeight="bold"
            fontSize="1.5em"
          >
            What's the&nbsp;
          </TextView>
          <TextView
            color={variablesBreakpoints.primaryColor}
            fontWeight="bold"
            fontSize="1.5em"
          >
            BMI?
          </TextView>
        </StyledTitle>

        <TextView color={variablesBreakpoints.backgroundColor} fontWeight="500">
          BMI stands for Body Mass Index and it is a commonly used measurement
          of body weight that is calculated by dividing a person's weight in
          kilograms by their height in meters squared. It is used as a quick and
          simple way to determine whether someone is underweight, normal weight,
          overweight, or obese. BMI is a useful tool for healthcare
          professionals to evaluate a patient's overall health status, as it
          takes into account both their weight and height. It is an important
          metric because being overweight or obese can increase the risk of many
          serious health conditions, such as heart disease, diabetes, and
          certain cancers. {'\n\n'} To calculate BMI, simply divide your weight
          in kilograms by your height in meters squared. For example, if you
          weigh 75 kilograms and are 1.8 meters tall, your BMI would be
          calculated as follows: {'\n'} BMI = 75 / (1.8 x 1.8) = 23.15 {'\n\n'}{' '}
          A BMI of less than 18.5 is considered underweight, a BMI between 18.5
          and 24.9 is considered <TextView color="#3AB600">normal</TextView>{' '}
          weight, a BMI between 25 and 29.9 is considered{' '}
          <TextView color="#E24747">overweight</TextView>, and a BMI of 30 or
          higher is considered <TextView color="#FF0B0B">obese</TextView>.{' '}
          {'\n\n'} While BMI is a useful tool for healthcare professionals, it
          is important to note that it does have its limitations. For example,
          it does not take into account differences in muscle mass, bone
          density, and body composition. This means that someone who is very
          muscular may have a high BMI, even though they have a low body fat
          percentage. {'\n\n'} Overall, BMI is a useful tool for determining
          whether someone is at a healthy weight or not. However, it is
          important to remember that it is just one piece of the puzzle when it
          comes to overall health and wellbeing. Eating a healthy diet, getting
          regular exercise, and maintaining a healthy lifestyle are all
          important factors in maintaining good health.
        </TextView>
      </StyledContentCard>
      <StyledContentFooter>
        <TextView color="#393E46" fontSize="14px" fontWeight="500">
          Produced by ChatGPT for practice purposes
        </TextView>
      </StyledContentFooter>
    </StyledContent>
  );
}

export default WITBContent;
