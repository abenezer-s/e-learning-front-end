import styles from "./ApplicationItem.module.css"
import { Link, Outlet } from "react-router-dom";

function ApplicationItem(){
    return (
        <div className={styles.applicationItem}>
            <h2>Application Item</h2>
            <Link to="/dashboard/"> back </Link>
        </div>
    )
 }

 export default ApplicationItem;