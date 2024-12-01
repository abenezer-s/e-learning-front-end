import styles from "./Dashboard.module.css"
import { Link, Outlet } from "react-router-dom";
function Dashboard(){
    return (
        <div className={styles.dashboard}>
            <h1>dashboard</h1>
            <Link to="/"> Home </Link>
            <Link to="/dashboard/myLearnings"> My learning</Link>
            <Link to="/dashboard/myTeachings"> My teachings</Link>
            <Link to="/dashboard/create"> Create </Link>
            <button>applicants</button>
            <Outlet />
        </div>
    )
 }

 export default Dashboard;