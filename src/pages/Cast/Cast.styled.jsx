import styled from 'styled-components';

export const ListActors = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[7]}px;
`;

export const ItemActor = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border: ${p => p.theme.borders.normal};
  box-shadow: 0px 5px 12px -5px;
  background-color: ${p => p.theme.colors.twoBackgroundColor};
`;

export const ImgActor = styled.img`
  display: block;
  margin: 0;
  max-width: 100%;
  height: auto;
  background-position: center;
`;

export const SecondaryTitle = styled.h3`
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
  margin-top: 0;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 180px;
  margin: auto;
`;
