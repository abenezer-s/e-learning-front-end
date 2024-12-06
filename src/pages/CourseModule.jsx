import Learnings from "../components/Learnings";
import ModuleOverview from "../components/ModuleOverview";
import styles from "./CourseModule.module.css"
import ContentListCont from "../components/ContentListCont";
function CourseModule() {
    return (
        <div className={styles.courseModule}>
            <h1>module</h1>
            <button>edit module</button>
            <div>
                <h1>module name</h1>
                <h1>description</h1>

            </div>
            
            <Learnings />            
            <ContentListCont content="learning items" />
        </div>
    )
}

export default CourseModule;