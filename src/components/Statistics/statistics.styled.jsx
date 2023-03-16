import styled from '@emotion/styled';

const Statistics = styled.section`
  width: 600px;
  margin: 0 auto;
  box-shadow: 1px 1px 5px grey;
`;

const Title = styled.h2``;
const StatList = styled.ul`
  display: flex;
  justify-content: center;
`;

const Item = styled.li`
  display: flex;
  justify-content: center;
  border: 1px solid black;
  width: 20%;
`;

const Label = styled.span``;
const Percentage = styled.span``;

export { Item, Statistics, Title, StatList, Label, Percentage };
