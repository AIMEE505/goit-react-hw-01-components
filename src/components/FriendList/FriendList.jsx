import React from "react";
import style from "./FriendList.module.css";
import FriendListIem from "./FriendListItem";

function FriendList({friends}) {
    return (
    <ul className={style.friendList}>
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