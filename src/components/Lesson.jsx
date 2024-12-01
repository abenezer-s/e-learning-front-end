import styles from "./Lesson.module.css"
import LessonItem from "./LessonItem";
import Quiz from "../pages/Quiz";
function Lesson(){
    return (
        <div className={styles.lesson}>
            <h3>lesson</h3>
            <LessonItem />
            <Quiz />
        </div>
    )
}

export default Lesson;