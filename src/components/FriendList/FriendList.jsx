import { FriendItems } from '../Friend/FriendItems';
import { FriendUl } from './friendList.styled';

export const FriendList = props => {
  return (
    <FriendUl>
      {props.friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendItems
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </FriendUl>
  );
};
