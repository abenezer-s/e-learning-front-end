import { useNavigate } from "react-router-dom";
import styles from "./LoginPrompt.module.css"
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
function LoginPrompt() {
    const {user, updateLogin, updateType} = useContext(UserContext);
    const loggedIn = user.loggedIn;
    const navigate = useNavigate();
    const handleLogin = (user)=> {
        if(loggedIn){
            
            const logOut = async ()=>{
                const response = await axios.post('/api/users/logout/', {
                    withCredentials: true
                });
                console.log(`LOGGED OUT`);
            }
            logOut();
            updateLogin(false);
            updateType(false);
        }else {
            navigate('/auth',{state:"signIn"});
        }
    }
    const handleJoin = ()=> {
        navigate("/auth", {state:"learner"})
    }
    return (
        <div className={styles.loginPrompt}>
            <button onClick={handleLogin} className={styles.login}>
                {user.loggedIn ? "Log out" : "log in"}
            </button>
            <button onClick={handleJoin} className={styles.joinPrompt}>
                Join For Free
            </button>
        </div>
    );
  }
  
  export default LoginPrompt;