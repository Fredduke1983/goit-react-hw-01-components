const { FriendLi, Status, Avatar, Name } = require('./friendList.styled');

export const FriendItems = ({ avatar, name, isOnline, id }) => {
  return (
    <FriendLi key={id}>
      <Status status={isOnline} />
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </FriendLi>
  );
};
