import React from 'react';
import styled from 'styled-components';
import { useBMI } from '../../contexts/BMIContext';
import variablesBreakpoints from '../../helpers/variablesBreakpoints';
import TextView from '../TextView';

const StyledFooter = styled.footer`
  background-color: ${variablesBreakpoints.insteadOfWhite};
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-block: 3em;
`;

const FooterSubItem = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    margin-top: 5px;
  }
`;

const FooterItemBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${(props) => props.alignItems};
  padding-top: 2em;
`;

const FooterRowItem = styled.div`
  display: flex;
  align-items: center;
`;

const FooterImageItem = styled.img`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: ${(props) => props.borderRadius};
  margin-right: ${(props) => props.marginRight};
`;

function Footer() {
  const [BMIInfo] = useBMI();

  const BMIResultSection = (
    <FooterItem>
      <TextView
        color={variablesBreakpoints.backgroundColor}
        fontSize="2em"
        fontWeight="bolder"
      >
        YOUR BMI SCORE
      </TextView>
      <FooterItemBody alignItems="center">
        <TextView color={variablesBreakpoints.primaryColor} fontSize="2em">
          {BMIInfo.bmi === 0 ? '-' : BMIInfo.bmi}
        </TextView>
      </FooterItemBody>
    </FooterItem>
  );

  const aboutDevSection = (
    <FooterItem>
      <TextView
        color={variablesBreakpoints.backgroundColor}
        fontSize="2em"
        fontWeight="bolder"
      >
        ABOUT DEV
      </TextView>
      <FooterItemBody alignItems="start">
        <FooterRowItem>
          <FooterImageItem
            height="128px"
            width="128px"
            borderRadius="100%"
            marginRight="1em"
            src="/assets/images/devImage.png"
          />
          <FooterSubItem>
            <TextView
              color={variablesBreakpoints.backgroundColor}
              fontSize="1.5em"
              fontWeight="600"
              isHyperLink
              href="https://github.com/bgebes"
            >
              Berkay Gebeş
            </TextView>
            <FooterRowItem>
              <FooterImageItem
                height="24px"
                width="24px"
                marginRight="0.25em"
                src="/assets/icons/github.svg"
              />
              <TextView
                color={variablesBreakpoints.backgroundColor}
                fontSize="1.25em"
                isHyperLink
                href="https://github.com/bgebes"
              >
                bgebes
              </TextView>
            </FooterRowItem>
          </FooterSubItem>
        </FooterRowItem>
      </FooterItemBody>
    </FooterItem>
  );

  const otherProjectsSection = (
    <FooterItem>
      <TextView
        color={variablesBreakpoints.backgroundColor}
        fontSize="2em"
        fontWeight="bolder"
      >
        OTHER PROJECTS
      </TextView>
      <FooterItemBody alignItems="start">
        <TextView
          color={variablesBreakpoints.backgroundColor}
          fontSize="1.5em"
          fontWeight="600"
          decoration="underline"
          isHyperLink
          href="https://memory-cards-js.vercel.app"
        >
          Memory Cards Game
        </TextView>
        <TextView
          color={variablesBreakpoints.backgroundColor}
          fontSize="1.5em"
          fontWeight="600"
          decoration="underline"
          isHyperLink
          href="https://test-typing-speed-js.vercel.app"
        >
          Test Your Typing Speed
        </TextView>
        <TextView
          color={variablesBreakpoints.backgroundColor}
          fontSize="1.5em"
          fontWeight="600"
          decoration="underline"
          isHyperLink
          href="https://turkish-checkers-game.vercel.app/"
        >
          Turkish Checkers Game
        </TextView>
      </FooterItemBody>
    </FooterItem>
  );

  return (
    <StyledFooter>
      {BMIResultSection}
      {aboutDevSection}
      {otherProjectsSection}
    </StyledFooter>
  );
}

export default Footer;
