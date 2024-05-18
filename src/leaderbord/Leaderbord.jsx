import styles from "./Leaderbord.module.css";
import { getLeaderbord } from "../api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import withoutEaseMod from "./images/withoutEaseMod.svg";
import withoutSuperpower from "./images/withoutSuperpower.svg";
export function Leaderbord({ achievements }) {
  const [leaderList, setLeaderList] = useState([]);
  // const formatDate = secFormat => {
  //   const min = Math.floor(secFormat / 60);
  //   const sec = secFormat % 60;
  //   return `${min}:${sec.toString().padStart("2", "0")}`;
  // };
  const imgSrc = achievements === 1 ? (achievements === 2 ? withoutEaseMod : withoutSuperpower) : "";

  const imgAlt = achievements === 1 ? "withoutEaseMod" : "";

  const formatDate = time => {
    let minutes = Math.floor(time / 60);
    let seconds = Math.round(time % 60);
    return `${minutes}:${seconds.toString().padStart("2", "0")}`;
  };

  useEffect(() => {
    getLeaderbord().then(data => {
      const leaderList = data.leaders.sort((a, b) => a.time - b.time);
      setLeaderList(leaderList);
    });
  }, []);
  return (
    <div className={styles.leadercontainer}>
      <div className={styles.mainBlock}>
        <div className={styles.topContainer}>
          <h1 className={styles.title}>Лидерборд</h1>
          <Link className={styles.startGameBtn} to="/">
            Начать игру
          </Link>
        </div>

        <div className={styles.listContainer}>
          <ul className={styles.levels}>
            <li className={styles.leaderItem}>
              <div className={styles.infoLeaderContainer}>
                <p className={styles.infoAboutLeaderTop}>Позиция</p>
                <p className={styles.infoAboutLeaderTop}>Пользователь</p>
                <p className={styles.infoAboutLeaderTop}>Время</p>
              </div>
            </li>
            {leaderList.slice(0, 10).map((value, index) => {
              return (
                <li key={value.id} className={styles.leaderItem}>
                  <div className={styles.infoLeaderContainer}>
                    <p className={styles.infoAboutLeader}> #{index + 1}</p>
                    <p className={styles.infoAboutLeader}>{value.name}</p>
                    <div>
                      <img className={styles.image} src={imgSrc} alt={imgAlt} />
                    </div>
                    <p className={styles.infoAboutLeader}>{formatDate(value.time)}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
