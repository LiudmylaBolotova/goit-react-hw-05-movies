import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Item = styled.li`
  margin-bottom: ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.normal};
  box-shadow: 0px 5px 12px -5px;
  background-color: ${p => p.theme.colors.twoBackgroundColor};
`;

export const ItemLink = styled(NavLink)`
  text-decoration: none;
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.text};
`;

export const Alert = styled.p`
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.accent};
  margin-left: ${p => p.theme.space[10]}px;
  margin-top: ${p => p.theme.space[7]}px;
`;
