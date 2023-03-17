import StatArray from './StatArray';
import * as css from './statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <css.Statistics>
      <css.TitleWrap>{title && <css.Title>{title}</css.Title>}</css.TitleWrap>
      <css.StatList>
        <StatArray stats={stats} />
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
