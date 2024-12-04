import Lesson from "../components/Lesson";
import ModuleOverview from "../components/ModuleOverview";
import styles from "./CourseModule.module.css"
function CourseModule() {
    return (
        <div className={styles.courseModule}>
            <h1>module</h1>
            <button>edit module</button>
            <div>
                <h1>module name</h1>
                <h1>description</h1>

            </div>
            
            <Lesson />            
        </div>
    )
}

export default CourseModule;