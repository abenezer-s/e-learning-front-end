import styles from "./Join.module.css"
import JoinLearnButton from "./JoinLearnButton";
import JoinTeachButton from "./JoinTeachButton";
function Join() {
    
    return (
        <div className={styles.join}>
            <div className={styles.learnOrTeach}>
                <div className={styles.learnJoin}>
                        
                        <h1 className={styles.learnTitle}>Learn anything </h1> 
                        <p className={styles.learnDesc}>
                        Welcome to our eLearning platform.
                        Dive into a wide range of expertly crafted courses designed to expand
                        your understanding and enhance your skills across various fields. 
                        Whether you're looking to deepen your expertise or explore new areas of interest, our comprehensive, 
                        knowledge-based and pracrical courses offer the perfect learning experience at your own pace.</p>
                        <div className={styles.joinButt}>
                            <JoinLearnButton />
                        </div>
                </div>
                <div className={styles.books}>

                </div>
                
                <div className={styles.joinTeach}>
                    <h1 className={styles.teachTitle}>Teach anything</h1>
                    <p className={styles.teachTitleDesc}>
                        Share your expertise by creating and uploading 
                        courses and programs for others to learn from.
                        You can easily design and publish your courses for a broad range of audience.
                        Help others unlock new opportunities for growth and development.</p>
                    <div className={styles.joinTButt}>
                        <JoinTeachButton />
                    </div>
                    
                </div>

            </div>

            
            
        </div>
    );
  }
  
  export default Join;