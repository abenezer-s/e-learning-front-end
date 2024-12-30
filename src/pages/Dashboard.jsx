import { useContext } from "react";
import styles from "./Dashboard.module.css"
import { Link, Outlet} from "react-router-dom";

function Dashboard(){
    let storedUser = JSON.parse(localStorage.getItem('user'));
    const creator = storedUser.isCreator;
    const loggedIn = storedUser.loggedIn;
    console.log("user context -> js object, in DASHBOARD",storedUser);

    return (
        <div className={loggedIn ? styles.dashboard : styles.hide}>
            
            <h1>dashboard</h1>
            <Link to="/"> 
                <button>Home</button>
            </Link>
            <div className={!creator ? styles.learner : styles.hide}>
                <Link to="/dashboard/myLearnings"> 
                    <button>My learning</button>
                </Link>    
            </div>
            
            <div className={creator ? styles.teacher : styles.hide}>
                <Link to="/dashboard/myTeachings"> 
                    <button>my teachings</button>
                </Link>
                <Link to="/create">
                    <button>create</button> 
                 </Link>
                <Link to="/dashboard/applications">
                     <button>applications</button>
                </Link>

            </div>
            
            <Outlet />
        </div>
    )
 }

 export default Dashboard;