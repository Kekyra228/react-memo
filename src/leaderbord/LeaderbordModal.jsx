import { useState } from "react";
import styles from "./LeaderboardModal.module.css";
import celebrationImageUrl from "./images/celebration.png";
import { Link } from "react-router-dom";
import { postLeaderbord } from "../api";
import { useModContext } from "../components/context/useModContext";

export function LeaderboardModal({ isLeader, gameDurationSeconds, gameDurationMinutes, onClick }) {
  const { isEasyMod } = useModContext();
  const { alahomoraMod } = useModContext();
  const [name, setName] = useState("");
  // const gameTime = gameDurationMinutes * 60 + gameDurationSeconds;
  // const gameTime = time => {
  //   const gameDurationMinutes = Math.floor(time / 60);
  //   const gameDurationSeconds = time % 60;
  //   return `${gameDurationMinutes}:${gameDurationSeconds.toString().padStart("2", "0")}`;
  // };
  const [message, setMessage] = useState(false);

  const postScore = async event => {
    event.preventDefault();
    const userAchievements = [];
    if (!isEasyMod) {
      userAchievements.push(1);
    }
    if (!alahomoraMod) {
      userAchievements.push(2);
    }
    const data = { name: name, time: gameDurationMinutes * 60 + gameDurationSeconds, achievements: userAchievements };
    await postLeaderbord(data).then(data.leaders);
    console.log("отправка");
    setMessage(true);
  };

  const imgSrc = isLeader ? celebrationImageUrl : "";

  const imgAlt = isLeader ? "celebration emodji" : "";

  return (
    <div className={styles.modal}>
      <div className={styles.mainContainer}>
        <img className={styles.image} src={imgSrc} alt={imgAlt} />
        <h2 className={styles.title}>Вы попали на Лидерборд!</h2>
        <input
          className={styles.inputLeaderName}
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Пользователь"
        ></input>
        <p className={styles.description}>Затраченное время:</p>
        <div className={styles.time}>
          {gameDurationMinutes.toString().padStart("2", "0")}.{gameDurationSeconds.toString().padStart("2", "0")}
        </div>
        <button className={styles.sendBtn} onClick={postScore}>
          Отправить результат
        </button>
        {message && <p className={styles.leaderMessage}> Результат отправлен!</p>}
        <Link to="/">
          <p className={styles.linkToLeaderboard}>Играть снова</p>
        </Link>
        <Link to="/leaderboard">
          <p className={styles.linkToLeaderboard}>Перейти к лидерборду</p>
        </Link>
      </div>
    </div>
  );
}
