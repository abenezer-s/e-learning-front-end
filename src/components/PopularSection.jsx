import Popular from "./Popular"
import styles from "./PopularSection.module.css"
function PopularSection() {
    return (
        <div className={styles.popularSection}>
            <h1>popular</h1>
            <Popular />
        </div>
    );
  }
  
  export default PopularSection;