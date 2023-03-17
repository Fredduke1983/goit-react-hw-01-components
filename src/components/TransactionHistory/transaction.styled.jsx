import styled from '@emotion/styled';

const Transaction = styled.table`
  width: 700px;
  margin: 20px auto;
  color: #615b5b;

  border: 1px solid grey;
  box-shadow: 1px 1px 5px grey;

  th {
    color: #fff;
    font-weight: 600;
  }
  tr:nth-of-type(even) {
    background-color: #80808040;
  }
  tr {
    height: 40px;
  }
`;

const THead = styled.thead`
  height: 60px;
  background-color: #07b6f8f0;
`;

export { Transaction, THead };
