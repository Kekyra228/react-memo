import { useState } from "react";
import { Button } from "../components/Button/Button";
import styles from "./LeaderboardModal.module.css";

import celebrationImageUrl from "./images/celebration.png";
import { Link } from "react-router-dom";
import { postLeaderbord } from "../api";

export function LeaderboardModal({ isLeader, gameDurationSeconds, gameDurationMinutes, onClick }) {
  //   const title = isLeader ? "Вы попали на Лидерборд!" : "";

  const [name, setName] = useState("");
  const gameTime = gameDurationMinutes * 60 + gameDurationSeconds;

  const [message, setMessage] = useState(false);

  const postScore = async event => {
    event.preventDefault();
    const data = { name: name, time: gameTime };
    postLeaderbord(data);
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
        <Button onClick={postScore}>Отправить результат</Button>
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
