import Profile from "./profile/Profile";
import user from "../data/user.json"
import Statistics from "./statistics";
import data from "../data/data.json"
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
    </div>
  );
};
