import styles from "./JoinLearnButton.module.css"
import { useNavigate } from "react-router-dom"
function JoinLearnButton(){
        const navigate = useNavigate()
        const registerLearner = ()=> {
            navigate("/auth", {state: "learner"})
        }
        return (    
               <div className={styles.learn}>
                    <button onClick={registerLearner}  className={styles.learnJoinButton}>
                        <h1 className={styles.styledLearn}>
                            Learn
                        </h1>
                    </button>
               </div>
        )
               
        }

export default JoinLearnButton;