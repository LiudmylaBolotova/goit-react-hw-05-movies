import styled from 'styled-components';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';

export const Container = styled.div`
  width: ${p => p.theme.sizes.width[6]}px;

  margin: auto;
  margin-top: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.twoBackgroundColor};
`;

export const StyledArrowLeftSquareFill = styled(BsFillArrowLeftSquareFill)`
  color: ${p => p.theme.colors.accent};

  margin-top: ${p => p.theme.space[5]}px;
  margin-bottom: ${p => p.theme.space[5]}px;

  :hover,
  :focus {
    color: ${p => p.theme.colors.text};
  }
`;
