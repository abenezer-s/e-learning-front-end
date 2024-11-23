import styles from "./ContentContainer.module.css"
function ContentContainer() {
    return (
        <div className={styles.contentContainer}>
        
            <div className={styles.details}>
                <div className={styles.providerImage}> 
                    <img src="/src/assets/img/christin-hume-mfB1B1s4sMc-unsplash.jpg" width={300} alt="" />
                </div>
                <div className={styles.title}> title </div>
                <div className={styles.contentType}> type </div>
                <div className={styles.provider}> provider </div>
            </div>
            <div className={styles.image}> 
                <img src="/src/assets/img/christin-hume-mfB1B1s4sMc-unsplash.jpg" width={300} alt="" />
            </div>
            
        </div>
    );
  }
  
  export default ContentContainer;