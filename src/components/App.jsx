import Profile from "./profile";
import user from "./profile/user.json"
import Statistics from "./statistics";
import data from "./statistics/data.json"
import FriendList from "./FriendList";
import friends from "./FriendList/friends.json"
import TransactionHistory from "./TransactionHistory";
import transaction from "./TransactionHistory/transaction.json"
import React from "react";


 function App () {
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
  avatar={user.avatar}
  stats={user.stats}
  />
    <Statistics title="Upload stats" stats={data} />
<Statistics stats={data} />
<FriendList friends={friends} />
      <TransactionHistory items={transaction} />
    </div>
  );
};

export default App;