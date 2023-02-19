import { User } from 'components/User/User';
import PropTypes from 'prop-types';

export const UserList = ({ users }) => {
  console.log(users);
  return (
    <ul>
      {users.map(({ id, name, email }) => {
        return (
          <li key={id}>
            <User user={{ name, email }}></User>
          </li>
        );
      })}
    </ul>
  );
};

UserList.prototypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ).isRequired,
};
