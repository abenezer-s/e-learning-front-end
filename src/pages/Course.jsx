import { Outlet } from "react-router-dom";
import ModuleOverview from "../components/ModuleOverview";
import styles from "./Course.module.css"
function Course() {
    return (
        <div className={styles.Course}>
            <ModuleOverview />
            <Outlet />
        </div>
    )
}

export default Course;