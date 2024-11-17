import styles from "./LoginPrompt.module.css"
function LoginPrompt() {
    return (
        <div className={styles.loginPrompt}>
            <button className={styles.login}>
                Log In
            </button>
            <button className={styles.joinPrompt}>
                Join For Free
            </button>
        </div>
    );
  }
  
  export default LoginPrompt;