import React from "react";

import style from "../profile/Profile.module.css";


function Profile ({username, location, avatar, tag, stats}) {
    return <div className={style.profile}>
  <div className={style.description}>
    <img
      src={avatar} 
      alt="User {avatar"
      className={style.avatar}
    />
    <p className={style.name}>{username}</p>
    <p className={style.tag}>@{tag}</p>
    <p className={style.location}>{location}</p>
  </div>

  <ul className={style.stats}>
    <li>
      <span className={style.label}>Followers</span>
      <span className={style.quantity}>{stats.followers}</span>
    </li>
    <li>
      <span className={style.label}>Views</span>
      <span className={style.quantity}>{stats.views}</span>
    </li>
    <li>
      <span className={style.label}>Likes</span>
      <span className={style.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>

}

export default Profile;