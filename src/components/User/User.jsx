import PropTypes from 'prop-types';
import { Text, Wrapper } from './User.styled';

export const User = ({ user: { name, email } }) => {
    const emailEndBis = email.endsWith('biz');
    return (
    <>
      <Text>
        Name: <Wrapper>{name}</Wrapper>
      </Text>
      <Text>
        Email: <Wrapper isGreen={emailEndBis}>{email}</Wrapper>
      </Text>
    </>
  );
};

User.prototypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
