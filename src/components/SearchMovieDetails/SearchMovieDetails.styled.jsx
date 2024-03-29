import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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

export const Img = styled.img`
  margin-right: ${p => p.theme.space[8]}px;
`;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes[1]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.text};
  width: ${p => p.theme.sizes.width[4]}px;
`;

export const Section = styled.div`
  display: flex;
`;

export const SectionLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LinksDetails = styled(NavLink)`
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.text};
  width: ${p => p.theme.sizes.width[4]}px;
  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
  }
`;
