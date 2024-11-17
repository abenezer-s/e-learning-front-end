import styles from "./Join.module.css"
function Join() {
    return (
        <div className={styles.join}>
            <div className={styles.learn}>
                <img className={styles.girl} src="/src/assets/img/learningGirl.png" alt="reading girl" />
                <div className={styles.learnJoin}>
                        
                        <h1>Learn anything </h1> 
                        <button className={styles.learnJoinButton}>
                            <h1 className={styles.styledLearn}>
                                Join
                            </h1>
                        </button>
                </div>

            </div>

            <div className={styles.teach}>
                <h1>Teach anything.</h1>
            </div>
            
            <button id="join">
                Join For Free
            </button>
        </div>
    );
  }
  
  export default Join;