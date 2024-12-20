import { useContext } from "react";
import styles from "./Dashboard.module.css"
import { Link, Outlet} from "react-router-dom";
import { UserContext } from "../context/UserContext";
function Dashboard(){
    const {user, updateType, updateLogin} = useContext(UserContext);
    const creator = user.isCreator;
    const loggedIn = user.loggedIn;
    console.log("user context in DASHBOARD",user);

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