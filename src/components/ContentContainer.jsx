import styles from "./ContentContainer.module.css"
function ContentContainer() {
    return (
        <div className={styles.contentContainer}>
            <h3>Content Container </h3>
            <div className={styles.image}> 
                <img src="" alt="" />
            </div>
            <div className={styles.title}> title </div>
            <div className={styles.contentType}> type </div>
            <div className={styles.provider}> provider </div>
        </div>
    );
  }
  
  export default ContentContainer;