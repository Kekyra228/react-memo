import styles from "./Leaderbord.module.css";
import { Button } from "../components/Button/Button";

// useEffect(()=>{
//   getLeaderbord({name, time})
// })

export function Leaderbord() {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Лидерборд</h1>
        <Button>Начать игру</Button>
        <ul className={styles.levels}>
          <li className={styles.leaderItem}></li>
          <li className={styles.leaderItem}></li>
          <li className={styles.leaderItem}></li>
        </ul>
      </div>
    </div>
  );
}
