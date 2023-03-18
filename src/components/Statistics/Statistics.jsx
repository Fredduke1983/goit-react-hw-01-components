import { StatList } from './StatList';
import * as css from './statistics.styled.jsx';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <css.Statistics>
      {title && <css.Title>{title}</css.Title>}
      <css.StatList>
        <StatList stats={stats} />
      </css.StatList>
    </css.Statistics>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};
