import { Link, useLocation } from 'react-router-dom';
import styles from "./Auth.module.css"
import Form from "./Form.jsx"

function Auth() {
    const location = useLocation()
    const user = location.state;
    const type = location.state;

    console.log("TYPE", type)
    return (
        <div className={styles.auth}>
            
            <div className={styles.head}>
                    <div className={styles.desc}> 
                        {(user == "learner" ? "signup to learn" :   
                         user == "teacher" ? "signup to teach" :
                         "sign in")}
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
                    <Form state={type}/>
                <div className={styles.image}>
                    <img src="/src/assets/img/istockphoto-2158169480-1024x1024.jpg" alt="sign up image" />

                </div>
            </div>
           
            <div className={styles.signIn}>

            </div>
        </div>
    )
}

export default Auth;