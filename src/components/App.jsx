import Profile from "./profile/Profile";
import user from "../data/user.json"
import Statistics from "./statistics";
import data from "../data/data.json"
import FriendList from "./FriendList";
import friends from "../data/friends.json"
import FriendListItem from "./FriendList/FriendListItem";
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        gap: 15,
        
      }}
    >
      <Profile />
      <Statistics />
      <FriendList />
    </div>
  );
};
