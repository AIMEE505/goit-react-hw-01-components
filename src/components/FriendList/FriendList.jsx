import React from "react";
import styles from "./FriendList.module.css";
import FriendListIem from "./FriendListItem";

function FriendList({friends}) {
    return (
    <ul className={styles.friendList}>
    {friends.map(friend =>(
        <FriendListIem 
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline} />
    ))}
  </ul>
);
}

export default FriendList;