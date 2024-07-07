import React from "react";
import style from "../profile/Profile.module.css";

function Profile ({username, location, avatar, tags, stats}) {
    return <div className={style.profile}>
  <div className={style.description}>
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User {avatar"
      className={style.avatar}
    />
    <p className={style.name}>Petra Marica</p>
    <p className={style.tag}>@pmarica</p>
    <p className={style.location}>Salvador, Brasil</p>
  </div>

  <ul className={style.stats}>
    <li>
      <span className={style.label}>Followers</span>
      <span className={style.quantity}>1000</span>
    </li>
    <li>
      <span className={style.label}>Views</span>
      <span className={style.quantity}>2000</span>
    </li>
    <li>
      <span className={style.label}>Likes</span>
      <span className={style.quantity}>3000</span>
    </li>
  </ul>
</div>

}

export default Profile;