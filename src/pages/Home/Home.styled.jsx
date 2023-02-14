import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Title = styled.h1`
  color: ${p => p.theme.colors.text};
  margin-left: ${p => p.theme.space[7]}px;
`;

export const Items = styled.li`
  margin-bottom: ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.normal};
  box-shadow: 0px 5px 12px -5px;
  background-color: ${p => p.theme.colors.twoBackgroundColor};
`;

export const ItemsLink = styled(NavLink)`
  text-decoration: none;
  font-size: ${p => p.theme.fontSizes[1]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.text};
`;
