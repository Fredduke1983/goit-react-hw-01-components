import user from 'data/user.json';

import * as css from './profile.styled';

const Profile = () => {
  const { username, tag, location, avatar, stats } = user;

  return (
    <css.ProfileStyle>
      <css.Description>
        <css.ImageAvatar src={avatar} alt={username} />
        <css.Name>{username}</css.Name>
        <css.Tag>@{tag}</css.Tag>
        <css.Location>{location}</css.Location>
      </css.Description>

      <css.Stats>
        <li>
          <css.Label>Followers</css.Label>
          <css.Quantity>{stats.followers}</css.Quantity>
        </li>
        <li>
          <css.Label>Views</css.Label>
          <css.Quantity>{stats.views}</css.Quantity>
        </li>
        <li>
          <css.Label>Likes</css.Label>
          <css.Quantity>{stats.likes}</css.Quantity>
        </li>
      </css.Stats>
    </css.ProfileStyle>
  );
};

export default Profile;
