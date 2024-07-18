import Profile from "./profile";
import user from "./profile/user.json"
import Statistics from "./statistics";
import data from "./statistics/data.json"
import FriendList from "./FriendList";
import friends from "./FriendList/friends.json"
import TransacationHistory from "./TransactionHistory";
import transaction from "../data/transaction.json";
import React from "react";

 const App = () => {
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
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      stats={user.stats}/>
      <Statistics
      title="UPLOAD STATS"
      stats={data}/>
      
      <FriendList 
      friends={friendsData}/>
    </div>
  );
};

export default App;