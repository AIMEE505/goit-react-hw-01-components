import Profile from "./profile";
import user from "../data/user.json"
import Statistics from "./statistics";
import data from "../data/data.json"
import FriendList from "./FriendList";
import friends from "../data/friends.json"
import TransacationHistory from "./TransactionHistory";
import transaction from "../data/transaction.json";
import React from "react";

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
