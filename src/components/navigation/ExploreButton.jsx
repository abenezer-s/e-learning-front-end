import styles from "./ExploreButton.module.css"
function ExploreButton() {
    return (
        <div className={styles.exploreButton}>
            <button className={styles.explorebutton}>
                <p className={styles.exploreButton}>
                Explore
                </p>
            </button>
        </div>
    );
  }
  
  export default ExploreButton;