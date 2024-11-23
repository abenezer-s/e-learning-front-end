import Category from "./Category";
import styles from "./Explore.module.css"

function Explore() {
    return (
        <div className={styles.explore}>
            <div className={styles.section}>
                <h1> explore </h1>
            </div>
            <div className={styles.categories}>
                <Category category="Computer Science"/>
                <Category category="Health"/>
                <Category category="Bussiness"/>
                <Category category="Math and Logic"/>
                <Category category="Languages"/>
            </div>
            
        </div>
    );
  }
  
  export default Explore;