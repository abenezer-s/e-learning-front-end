import { Link } from "react-router-dom";
import styles from "./Logo.module.css"

function Logo() {
    let user = JSON.parse(localStorage.getItem('user'));
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