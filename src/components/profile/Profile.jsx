import {
  ProfileStyle,
  Description,
  Stats,
  ImageAvatar,
  Name,
  Tag,
  Location,
  Label,
  Quantity,
} from './profile.styled';

const Profile = props => {
  const { username, tag, location, avatar, stats } = props;

  return (
    <ProfileStyle>
      <Description>
        <ImageAvatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <li>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </li>
        <li>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </li>
        <li>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </li>
      </Stats>
    </ProfileStyle>
  );
};

export default Profile;
