import StatArray from './StatArray';
import * as css from './statistics.styled';

const Statistics = () => {
  return (
    <css.Statistics>
      <css.Title>Upload stats</css.Title>
      <css.StatList>
        <StatArray />
      </css.StatList>
    </css.Statistics>
  );
};

export default Statistics;
