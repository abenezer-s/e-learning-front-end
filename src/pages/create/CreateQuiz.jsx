import CreateQues from "./CreateQues";
import styles from "./CreateQuiz.module.css"
import { Link, Outlet } from "react-router-dom";
function CreateQuiz(){
    return (
        <div className={styles.createQuiz}>
            <h1>Create a quiz</h1>
            <button>close</button>
            
            <h2>add a question</h2>
            <CreateQues />
        </div>
    )
 }
 export default CreateQuiz;