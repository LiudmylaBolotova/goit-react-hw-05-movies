import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SearchBar = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: ${p => p.theme.sizes.height[5]}px;
  padding-right: ${p => p.theme.space[6]}px;
  padding-left: ${p => p.theme.space[6]}px;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  margin-top: ${p => p.theme.space[3]}px;

  background-color: ${p => p.theme.colors.backgroundColor};
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${p => p.theme.sizes.width[5]}px;

  background-color: ${p => p.theme.colors.backgroundSearchBar};
  border-radius: ${p => p.theme.radii.round}px;
  overflow: hidden;
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  width: ${p => p.theme.sizes.width[2]}px;
  height: ${p => p.theme.sizes.height[2]}px;
  border: 0;

  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  :hover {
    opacity: 1.5;
  }
`;

export const SearchFormButtonLabel = styled.span`
  position: absolute;
  width: ${p => p.theme.sizes.width[0]}px;
  height: ${p => p.theme.sizes.height[0]}px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: ${p => p.theme.fontSizes[3]}px;
  border: none;
  outline: none;
  padding-left: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px;

  ::placeholder {
    font: inherit;
    font-size: ${p => p.theme.fontSizes[3]}px;
    font-weight: ${p => p.theme.fontWeights.middle};
    margin: auto;
  }
`;

export const Item = styled.li`

  margin-bottom: ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.normal};
  box-shadow: 0px 5px 12px -5px;
  background-color: ${p => p.theme.colors.twoBackgroundColor};
`;

export const ItemLink = styled(NavLink)`
  text-decoration: none;
  font-size: ${p => p.theme.fontSizes[1]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.text};
`;
