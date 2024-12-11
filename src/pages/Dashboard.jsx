import styles from "./Dashboard.module.css"
import { Link, Outlet } from "react-router-dom";
function Dashboard(){
    return (
        <div className={styles.dashboard}>
            <h1>dashboard</h1>
            <Link to="/"> 
                <button>Home</button>
            </Link>
            <Link to="/dashboard/myLearnings"> 
                <button>My learning</button>
            </Link>
            <Link to="/dashboard/myTeachings"> 
                <button>my teachings</button>
            </Link>
            <Link to="/create">
                <button>create</button> 
             </Link>
            <Link to="/dashboard/applications">
                 <button>applications</button>
            </Link>
            <Outlet />
        </div>
    )
 }

 export default Dashboard;