
import { StyledLink, NavLinks, Header } from "./SharedLayout.styled";
import { Outlet } from 'react-router-dom';
 const SharedLayout = () => {
    return (
      <div>
        <Header>
          <NavLinks>
            <StyledLink to="/" end>
              Home
            </StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>
          </NavLinks>
        </Header>
        <Outlet/>
      </div>
    );
}

export default SharedLayout;
