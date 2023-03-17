import * as css from './profile.styled';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
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

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
