import { Outlet } from "react-router-dom";
import ModuleOverview from "../components/ModuleOverview";
import styles from "./Course.module.css"
import Applications from "../components/Applications";
function Course() {
    // A component to display a course's detail
    return (
        <div className={styles.Course}>
            
            <div>
                <h1>course name</h1>
                <h1>description</h1>

            </div>
            
            <ModuleOverview />
            <Applications />
            <Outlet />

        </div>
    )
}

export default Course;