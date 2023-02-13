import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: ${p => p.theme.sizes.width[6]}px;

  margin: auto;
  margin-top: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.twoBackgroundColor};
`;

export const PrimaryTitle = styled.h1`
  color: ${p => p.theme.colors.accent};
  :hover,
  :focus {
    color: ${p => p.theme.colors.text};
  }
`;

export const SecondaryTitle = styled.h2`
  color: ${p => p.theme.colors.accent};
  :hover,
  :focus {
    color: ${p => p.theme.colors.text};
  }
`;

export const Img = styled.img``;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes[1]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.text};
  width: ${p => p.theme.sizes.width[4]}px;
`;

export const Section = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const LinkCast = styled(NavLink)`
  
`;

export const LinkReviews = styled(NavLink)`
  
`;