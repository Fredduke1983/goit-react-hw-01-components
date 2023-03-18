import { FriendLi, Status, Avatar, Name } from './friendItems.styled';

export const FriendItems = ({ avatar, name, isOnline }) => {
  return (
    <FriendLi>
      <Status status={isOnline} />
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </FriendLi>
  );
};
