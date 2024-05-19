import styles from "./Leaderbord.module.css";
import { getLeaderbord } from "../api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import withoutEasyMod from "./images/withoutEasyMod.svg";
// import { useModContext } from "../components/context/useModContext";
import withoutSuperpower from "./images/withoutSuperpower.svg";
import alahomoraUsed from "./images/alahomoraUsed.svg";
import easyModUsed from "./images/easyModUsed.svg";
export function Leaderbord() {
  // const { isEasyMod } = useModContext();
  // const { alahomoraMod } = useModContext();
  const [leaderList, setLeaderList] = useState([]);

  // const imgSrc = achievements === 1 ? (achievements === 2 ? withoutEaseMod : withoutSuperpower) : "";

  // const imgAlt = achievements === 1 ? "withoutEaseMod" : "";

  const formatDate = time => {
    let minutes = Math.floor(time / 60);
    let seconds = Math.round(time % 60);
    return `${minutes}:${seconds.toString().padStart("2", "0")}`;
  };

  useEffect(() => {
    getLeaderbord().then(data => {
      const leaderList = data.leaders.map(leader => {
        const haveHardModAchiev = leader.achievements.includes(1);
        const haveSuperPowerAchiev = leader.achievements.includes(2);
        return { ...leader, haveHardModAchiev, haveSuperPowerAchiev };
      });
      data.leaders.sort((a, b) => a.time - b.time);
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
                <p className={styles.infoAboutLeaderTop}>Достижения</p>
                <p className={styles.infoAboutLeaderTop}>Время</p>
              </div>
            </li>
            {leaderList.slice(0, 10).map((value, index) => {
              return (
                <li key={value.id} className={styles.leaderItem}>
                  <div className={styles.infoLeaderContainer}>
                    <p className={styles.infoAboutLeader}> #{index + 1}</p>
                    <div className={styles.achievementsContain}>
                      <p className={styles.infoAboutLeader}>{value.name}</p>
                      <div className={styles.achievements}>
                        {/* {!haveHardModAchiev ? (
                          <img className={styles.image} src={withoutEasyMod} alt={"withoutEasyMod"} />
                        ) : (
                          <img className={styles.image} src={easyModUsed} alt={"easyModUsed"} />
                        )}
                        {!alahomoraMod ? (
                          <img className={styles.image} src={withoutSuperpower} alt={"withoutSuperpower"} />
                        ) : (
                          <img className={styles.image} src={alahomoraUsed} alt={"alahomoraUsed"} />
                        )} */}
                        {value.haveHardModAchiev ? (
                          <img className={styles.image} src={withoutEasyMod} alt={"withoutEasyMod"} />
                        ) : (
                          <img className={styles.image} src={easyModUsed} alt={"easyModUsed"} />
                        )}
                        {value.haveSuperPowerAchiev ? (
                          <img className={styles.image} src={withoutSuperpower} alt={"withoutSuperpower"} />
                        ) : (
                          <img className={styles.image} src={alahomoraUsed} alt={"alahomoraUsed"} />
                        )}
                      </div>
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
