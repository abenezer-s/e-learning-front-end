import Lesson from "../components/Lesson";
import ModuleOverview from "../components/ModuleOverview";
import styles from "./CourseModule.module.css"
function CourseModule() {
    return (
        <div className={styles.courseModule}>
            <h1>module</h1>
            <Lesson />            
        </div>
    )
}

export default CourseModule;