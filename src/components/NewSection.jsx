import New from "./New"
import styles from "./NewSection.module.css"
function NewSection() {
    return (
        <div className={styles.newSection}>
            <h1>New</h1>
            <New />
        </div>
    );
  }
  
  export default NewSection;