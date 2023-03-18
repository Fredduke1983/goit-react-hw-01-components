import * as css from './statistics.styled';

export const StatList = props => {
  return props.stats.map(({ id, label, percentage }, index) => {
    return (
      <css.Item key={id} id={'card' + index}>
        <css.Label>{label}</css.Label>
        <css.Percentage>{percentage}%</css.Percentage>
      </css.Item>
    );
  });
};
