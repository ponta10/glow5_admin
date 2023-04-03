import PropTypes from 'prop-types';
import ClipLoader from 'react-spinners/ClipLoader';
import { override } from './css';

export function Spinner(props) {
  const { size, color } = props;

  return (
    <ClipLoader
      size={100}
      color="#ff0000"
      loading
      css={override}
      speedMultiplier={1}
    />
  );
}

Spinner.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

Spinner.defaultProps = {
  size: 150,
  color: '#123abc',
};
