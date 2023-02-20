import PropTypes from 'prop-types';
import {
  FriendsItemStyled,
  Status,
  Avatar,
  Name,
} from './FriendsItem.styled.js';

export const FriendsItem = ({ id, avatar, name, isOnline }) => {
  return (
    <FriendsItemStyled>
      <Status statusEvent={isOnline.toString()}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </FriendsItemStyled>
  );
};

FriendsItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
