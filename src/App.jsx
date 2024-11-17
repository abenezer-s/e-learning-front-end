import { useState } from 'react'
import Home from "./components/Home";
import styles from "./App.module.css"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className={styles.app}>
        <Home />
      </div>
    </>
  );
}

export default App;
