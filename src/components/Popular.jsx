import styles from "./Popular.module.css"
import ContentContainer from "./ContentContainer"
function Popular() {
    return (
        <div className={styles.popular}>
            <ContentContainer />
            <ContentContainer />
            <ContentContainer />
            <ContentContainer />
            
        </div>
    );
  }
  
  export default Popular;