import styles from "./ApplicationItem.module.css"
import { Link, Outlet } from "react-router-dom";

function ApplicationItem(){
    return (
        <div className={styles.applicationItem}>
            <h2>Application Item</h2>
            <h3>motivation letter and other fields</h3>
            <button>accept</button>
            <button>reject</button>
            <Link to="/dashboard/"> back </Link>
        </div>
    )
 }

 export default ApplicationItem;