import styled from '@emotion/styled';

const FriendLi = styled.li`
  display: flex;
  align-items: center;
  width: 300px;
  height: 100px;
  border: 1px solid #80808057;
  box-shadow: 1px 1px 5px grey;
`;

const Status = styled.span`
  width: 12px;
  height: 12px;

  margin-left: 15px;
  margin-right: 15px;

  border-radius: 50%;
  background-color: ${props => {
    return props.status ? 'green' : 'red';
  }};
`;

const Avatar = styled.img`
  border-radius: 50%;
  box-shadow: 1px 1px 5px grey;
`;

const Name = styled.p`
  margin-left: 15px;
  font-weight: 600;
  font-size: 27px;
`;

export { FriendLi, Status, Avatar, Name };
