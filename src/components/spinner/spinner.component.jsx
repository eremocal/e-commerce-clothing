import { SpinnerOverlay, SpinnerContainer } from './spinner.styles';

const Spinner = (WrappedComponent) => {
  const Spinners = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinners;
};

export default Spinner;
