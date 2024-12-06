import styles from "./Learnings.module.css"
import Quiz from "../pages/Quiz";
import LearningItem from "./LearningItem";
function Learnings(){
    return (
        <div className={styles.learning}>
            <h3>learning</h3>
            <div className={styles.learningItem}>
                <LearningItem />
            </div>
            <div className={styles.quiz}>
                <Quiz />
            </div>
            
        </div>
    )
}

export default Learnings;