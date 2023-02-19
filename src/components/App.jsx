import { data } from 'data/users';
import { Section } from './Section/Section';
import { User } from './User/User';
import { UserList } from './UserList/UserList';

export const App = () => {
  return (
    <div>
      <Section>
        <User user={data[0]}></User>
      </Section>
      <Section title="List of users">
        <UserList users={data}></UserList>
      </Section>
    </div>
  );
};
