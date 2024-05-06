import { Link } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";
import { GameModContext } from "../../components/context/gameModContext";


export function SelectLevelPage() {

  const {openEasyMod} = GameModContext()

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Выбери сложность</h1>
        <ul className={styles.levels}>
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
          <div>
            <h3>Легкий режим</h3>
            <input type="radio" 
            onClick={openEasyMod}
            />
        </div>
      </div>
    </div>
  );
}
