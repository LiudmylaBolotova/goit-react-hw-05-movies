import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: ${p => p.theme.space[6]}px;
  border: ${p => p.theme.borders.normal};
  box-shadow: 0px 5px 12px -5px;
  background-color: ${p => p.theme.colors.twoBackgroundColor};
`;

export const SecondaryTitle = styled.h2`
  margin-left: ${p => p.theme.space[5]}px;
  font-size: ${p => p.theme.fontSizes[1]}px;
  color: ${p => p.theme.colors.accent};
  :hover,
  :focus {
    color: ${p => p.theme.colors.text};
  }
`;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes[1]}px;
  font-weight: ${p => p.theme.fontWeights.middle};
  color: ${p => p.theme.colors.text};
  margin-left: ${p => p.theme.space[5]}px;
  margin-right: ${p => p.theme.space[5]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const Alert = styled.p`
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.accent};
  margin: auto;
  margin-bottom: ${p => p.theme.space[8]}px;
`;