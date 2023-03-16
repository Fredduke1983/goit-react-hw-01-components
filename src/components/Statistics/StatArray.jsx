import * as css from './statistics.styled';
import data from 'data/data.json';

const StatArray = () => {
  return data.map(el => {
    const { id, label, percentage } = el;
    return (
      <css.Item key={id}>
        <css.Label>{label}</css.Label>
        <css.Percentage>{percentage}%</css.Percentage>
      </css.Item>
    );
  });
};
export default StatArray;
