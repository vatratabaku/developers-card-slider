import Card from "./components/Card";
import { useState } from "react";
import developers from "./components/developers";
import styles from "./components/Card.module.css";

function App() {
  const [current, setCurrent] = useState(0);

  const nextClick = () => {
    if (current === developers.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(() => current + 1);
    }
  };

  const previousClick = () => {
    if (current === 0) {
      setCurrent(developers.length - 1);
    } else {
      setCurrent(() => current - 1);
    }
  };

  return (
    <div className="App">
      <div className={styles.container}>
        <button className={styles.firstBtn} onClick={previousClick}>
          Previous
        </button>
        <Card
          key={developers[current].id}
          username={developers[current].name}
          lastName={developers[current].surname}
          pl={developers[current].pl}
          jobPosition={developers[current].jobPosition}
          image={developers[current].image}
          text={developers[current].text}
        ></Card>
        
        <button className={styles.secondBtn} onClick={nextClick}>
          Next
        </button>
      </div>
    </div>
  );
}
export default App;
