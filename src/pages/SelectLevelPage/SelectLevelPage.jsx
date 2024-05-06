import { Link, useNavigate } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";
import { ModContext } from "../../components/context/gameModContext";
import { useState } from "react";
import { Button } from "../../components/Button/Button";
import { set } from "lodash";


export function SelectLevelPage() {

  const { chooseEasyMod } = ModContext();

  const nav = useNavigate();

  const [level, setLevel] = useState(null);


  const startGame = () => {
    nav(`/game/${level}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Выбери сложность</h1>
        <ul className={styles.levels}>
          <li className={styles.level}>
            <label className={styles.levelLink}>
              1
              <input type="checkbox" value="3" isChecked={level} onChange={(e)=>setLevel(e.target.value)} />
            </label>
          </li>

          <li className={styles.level}>
            <label className={styles.levelLink}>
              2
              <input type="checkbox" value="6"  isChecked={level} onChange={(e)=>setLevel(e.target.value) } />
            </label>
          </li>

          <li className={styles.level}>
            <label className={styles.levelLink}>
              3
              <input type="checkbox" value="9" isChecked={level} onChange={(e)=>setLevel(e.target.value)} />
            </label>
          </li>
          {/* <li className={styles.level}>
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
          </li> */}
        </ul>
        <label className={styles.chooseEasyMod}> Легкий режим: <input type="checkbox" name="myCheckbox" onChange={(e)=>chooseEasyMod()}/>
        </label>
        <Button onClick={startGame}>Играть</Button>
      </div>
    </div>
  );
}
