import { FriendItems } from './FriendItems';
import { FriendUl } from './friendList.styled';

export const FriendList = props => {
  return (
    <FriendUl>
      {props.friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendItems
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            id={id}
          />
        );
      })}
    </FriendUl>
  );
};
