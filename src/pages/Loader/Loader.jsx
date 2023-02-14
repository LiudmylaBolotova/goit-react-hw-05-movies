import { Vortex } from 'react-loader-spinner';
import { StyledLoader } from './Loader.styled';

const Loader = () => {
  return (
    <StyledLoader>
      <Vortex height="80" width="80" />
    </StyledLoader>
  );
};

export default Loader;
