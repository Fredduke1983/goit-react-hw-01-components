import { Transaction, THead } from './transaction.styled.jsx';

export const TransactionHistory = props => {
  return (
    <Transaction>
      <THead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </THead>

      <tbody>
        {props.items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </Transaction>
  );
};
