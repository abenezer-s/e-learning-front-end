import { useNavigate } from "react-router-dom";
import styles from "./LoginPrompt.module.css"
import axios from "axios";

function LoginPrompt() {
    let storedUser = JSON.parse(localStorage.getItem('user'));
    console.log("parsed OBJECT", storedUser);
    const loggedIn = storedUser.loggedIn;
    const navigate = useNavigate();
    const handleLogin = (storedUser)=> {
        if(loggedIn){
            const logOut = async ()=>{
                const response = await axios.post('/api/users/logout/', {
                    withCredentials: true
                });
                console.log(`LOGGED OUT`);
            }
            logOut();
            storedUser.isCreator = null;
            storedUser.loggedIn = false;
            localStorage.setItem('user', JSON.stringify(storedUser));
            console.log("user object", storedUser);
            window.location.reload();
            navigate('/');
        }else {
            navigate('/auth',{state:"signIn"});
        }
    }
    const handleJoin = ()=> {
        navigate("/auth", {state:"learner"});
    }
    return (
        <div className={styles.loginPrompt}>
            <button onClick={()=>{handleLogin(storedUser)}} className={styles.login}>
                {storedUser.loggedIn ? "Log out" : "log in"}
            </button>
            <div className={ storedUser.loggedIn ? styles.hide : null}>
                <button onClick={handleJoin} className={styles.joinPrompt}>
                    Join For Free
                </button>
            </div>
            
        </div>
    );
  }
  
  export default LoginPrompt;