import styles from "./New.module.css"
import ContentContainer from "./ContentContainer"
function New() {
    return (
        <div className={styles.new}>
            <ContentContainer />
            <ContentContainer />
            <ContentContainer />
        </div>
    );
  }
  
  export default New;