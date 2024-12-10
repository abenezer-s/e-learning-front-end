import { Link, useLocation } from 'react-router-dom';
import styles from "./Auth.module.css"
import Form from "./Form.jsx"
function Auth() {
    const location = useLocation()
    let user = location.state;
    console.log("USER IN AUTH", user)
    return (
        <div className={styles.auth}>
            
            <div className={styles.signup}>
                    <div className={styles.desc}> 
                        signup to {(user == "learner" ? "learn" : "teach")}
                    </div> 
                <div className={styles.button}>
                    <Link to="/"> 
                        <button >
                            back
                        </button>
                    </Link>
                </div>
            </div>
            <div className={styles.authCard}>
                
                <Form />
                <div className={styles.image}>
                    <img src="/src/assets/img/istockphoto-2158169480-1024x1024.jpg" alt="sign up image" />

                </div>
            </div>
           

        </div>
    )
}

export default Auth;