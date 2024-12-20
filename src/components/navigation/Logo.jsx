import { Link } from "react-router-dom";
import styles from "./Logo.module.css"
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
function Logo() {
    const {user} = useContext(UserContext);
    const loggedIn = user.loggedIn;
    return (  
        <div className={styles.logo}> 
        <Link to={loggedIn? "/dashboard" : "/"}>
            <h1> learena </h1>
        </Link>
        
        </div>
    );
  }
  
  export default Logo;