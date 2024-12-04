import styles from "./Applications.module.css"
import { Link, Outlet } from "react-router-dom";
import ApplicationItem from "./ApplicationItem";

function Applications(){
    return (
        <div className={styles.applications}>
            <h1>Applications</h1>
            <Link to="/dashboard/"> back </Link>
            <ApplicationItem />
        </div>
    )
 }

 export default Applications;