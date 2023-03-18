import styled from '@emotion/styled';

const Statistics = styled.section`
  width: 600px;
  margin: 0 auto;
  box-shadow: 1px 1px 5px grey;
`;

const Title = styled.h2`
  display: flex;
  height: 80px;
  justify-content: center;
  align-items: center;
`;

const StatList = styled.ul`
  display: flex;
  justify-content: center;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #80808057;

  width: 20%;
  height: 50px;

  color: #fff;

  &#card0 {
    background-color: green;
  }
  &#card1 {
    background-color: red;
  }
  &#card2 {
    background-color: blue;
  }
  &#card3 {
    background-color: black;
  }
  &#card4 {
    background-color: violet;
  }
`;

const Label = styled.span``;
const Percentage = styled.span``;

export { Item, Statistics, Title, StatList, Label, Percentage };
