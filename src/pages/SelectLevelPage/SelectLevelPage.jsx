import { Link } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";
import { Button } from "../../components/Button/Button";
import { useModContext } from "../../components/context/useModContext";

export function SelectLevelPage() {
  const { isEasyMod, chooseEasyMod } = useModContext();

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Выбери сложность</h1>
        <ul className={styles.levels}>
          {/* <li className={styles.level}>
            <label className={styles.levelLink}>
              1
              <input type="checkbox" value="3" checked={level} onChange={e => setLevel(e.target.value)} />
            </label>
          </li>

          <li className={styles.level}>
            <label className={styles.levelLink}>
              2
              <input type="checkbox" value="6" checked={level} onChange={e => setLevel(e.target.value)} />
            </label>
          </li>

          <li className={styles.level}>
            <label className={styles.levelLink}>
              3
              <input type="checkbox" value="9" checked={level} onChange={e => setLevel(e.target.value)} />
            </label>
          </li> */}
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/3">
              1
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/6">
              2
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/9">
              3
            </Link>
          </li>
        </ul>
        <label className={styles.chooseEasyMod}>
          {" "}
          Легкий режим: <input type="checkbox" name="myCheckbox" checked={isEasyMod} onChange={e => chooseEasyMod()} />
        </label>
        <Button>Играть</Button>
        <Link to="/leaderboard">
          <p className={styles.linkToLeaderboard}>Перейти к лидерборду</p>
        </Link>
      </div>
    </div>
  );
}
