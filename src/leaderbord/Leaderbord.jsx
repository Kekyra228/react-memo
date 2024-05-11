import styles from "./Leaderbord.module.css";
import { Button } from "../components/Button/Button";
import { getLeaderbord } from "../api";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

export function Leaderbord({ onClick }) {
  // function startGame() {
  //   const nav = useNavigate();
  //   nav(/);
  // }
  const [leaderList, setLeaderList] = useState([]);
  useEffect(() => {
    getLeaderbord().then(data => {
      setLeaderList(data.leaders);
      data.sort((a, b) => {
        return a.time - b.time;
      });
    });
  }, []);
  return (
    <div className={styles.leadercontainer}>
      <div className={styles.mainBlock}>
        <div className={styles.topContainer}>
          <h1 className={styles.title}>Лидерборд</h1>
          <Button>Начать игру</Button>
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
            {leaderList.map(value => {
              return (
                <li key={value.id} className={styles.leaderItem}>
                  <div className={styles.infoLeaderContainer}>
                    <p className={styles.infoAboutLeader}> #{value.id}</p>
                    <p className={styles.infoAboutLeader}>{value.name}</p>
                    <p className={styles.infoAboutLeader}>{value.time}</p>
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
