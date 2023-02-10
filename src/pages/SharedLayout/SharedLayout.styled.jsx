import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-top: ${p => p.theme.space[3]}px;
  
  text-decoration: none;

  &.active {
    color: ${p => p.theme.colors.accent};
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 50px;
  margin-left: ${p => p.theme.space[7]}px;
`;

export const Header = styled.header`
  width: 100%;
  height: ${p => p.theme.sizes.height[2]}px;
  background-color: ${p => p.theme.colors.backgroundColor};

  border: ${p => p.theme.borders.normal};
  box-shadow: 0px 5px 12px -5px;
  background-color: ${p => p.theme.colors.twoBackgroundColor};
`;
