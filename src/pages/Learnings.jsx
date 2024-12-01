import Footer from "../components/Footer";
import LearningItem from "../components/LearningItem";
import styles from "./Learnings.module.css"
function Learnings(){
    return (
        <div className={styles.learnings}>
            <h2>my Learnings</h2>
            <button> In progress</button>
            <button> Completed</button>
            <LearningItem />
            <Footer />

        </div>
    )
}

export default Learnings;