import styles from "./JoinLearnButton.module.css"
function JoinLearnButton(){
        return (    
               <div className={styles.learn}>
                    <button className={styles.learnJoinButton}>
                        <h1 className={styles.styledLearn}>
                            Learn
                        </h1>
                    </button>
               </div>
        )
               
        }

export default JoinLearnButton;