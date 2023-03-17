import { FriendUl, FriendLi, Status, Avatar, Name } from './friendList.styled';

export const FriendList = props => {
  return (
    <FriendUl>
      {props.friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendLi key={id}>
            <Status status={isOnline} />
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
          </FriendLi>
        );
      })}
    </FriendUl>
  );
};
