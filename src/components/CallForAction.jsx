import styles from "./CallForAction.module.css"
import JoinLearnButton from './JoinLearnButton'
import JoinTeachButton from './JoinTeachButton'
function CallForAction() {
    return (
        <div className={styles.action}>
            <div className={styles.image}>
                <img src="/src/assets/img/ai-generated-8577250_1920.png" alt="image" />
            </div>
            <div className={styles.description}>
                <div className={styles.papragraph}>
                    <h1>
                        Take the next step and join.
                    </h1>
                    <h4>teach or learn by joining for free. 
                        join now. 
                        unlock massive opportunities.
                        teach or learn by joining for free. 
                        join now. 
                        unlock massive opportunities.
                        teach or learn by joining for free. 
                        join now. 
                        unlock massive opportunities.
                        teach or learn by joining for free. 
                        join now. 
                        unlock massive opportunities.
                    
                    </h4>
                </div>
                <div className={styles.join}>
                    <JoinLearnButton />
                    <JoinTeachButton />
                </div>
            </div>
            
            
        </div>
    );
  }
  
  export default CallForAction;