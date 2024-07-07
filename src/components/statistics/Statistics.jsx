import React from "react";
import style from "../statistics/Statistics.module.css";

function Statistics ({title, stats}) {

   return <section className={style.statistics}>
  <h2 className={style.title}>Upload stats</h2>

  <ul className={style.statList}>
    <li className={style.item}>
      <span className={style.label}>.docx</span>
      <span className={style.percentage}>4%</span>
    </li>
    <li className={style.item}>
      <span className={style.label}>.mp3</span>
      <span className={style.percentage}>14%</span>
    </li>
    <li className={style.item}>
      <span className={style.label}>.pdf</span>
      <span className={style.percentage}>41%</span>
    </li>
    <li className={style.item}>
      <span className={style.label}>.mp4</span>
      <span className={style.percentage}>12%</span>
    </li>
  </ul>
</section>
}

export default Statistics;