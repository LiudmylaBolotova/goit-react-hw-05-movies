import styled from 'styled-components';

export const ListActors = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[7]}px;
`;

export const ItemActor = styled.li`
  
  border: ${p => p.theme.borders.normal};
  box-shadow: 0px 5px 12px -5px;
  background-color: ${p => p.theme.colors.twoBackgroundColor};
`;

// export const ImgActor = styled.img`
//   border: ${p => p.theme.borders.middle};
  
// `;

export const SecondaryTitle = styled.h3`
  margin-top: ${p => p.theme.space[4]}px;

  color: ${p => p.theme.colors.accent};
  :hover,
  :focus {
    color: ${p => p.theme.colors.text};
  }
`;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes[0]}px;
  font-weight: ${p => p.theme.fontWeights.middle};
  color: ${p => p.theme.colors.text};
  /* margin-left: ${p => p.theme.space[5]}px;
  margin-right: ${p => p.theme.space[5]}px;
  margin-bottom: ${p => p.theme.space[5]}px; */
`;


