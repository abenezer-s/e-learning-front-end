import styles from "./CreateQuiz.module.css"
import { Link, Outlet } from "react-router-dom";
function CreateQuiz(){
    return (
        <div className={styles.createQuiz}>
            <h1>Create a quiz</h1>
            <button>close</button>
            
            <h2>add a question</h2>
            <div className={styles.questions}>
                created questions appear here
                <button>X</button>
            </div>
            <div className={styles.fields}>
                <button>+</button>                
                <form >
                    <input type="text" placeholder="write your question here"/>
                </form>
                <h2>question type</h2>
                <button>multiple choice</button>
                <button>fill blank space</button>
                <div className={styles.choice}> 
                    <h2>add choices</h2>
                    <div className={styles.questions}>
                        created choices appear here
                        <button>X</button>
                    </div>
                    <button>add</button>
                    <input type="text" placeholder="write choice"/>
                </div>
                <div className={styles.reading}> 
                    <h2> enter answer for question</h2>
                if multiple choice add the choice number(like choice_1)
                    <input type="text" placeholder="write answer"/>
                </div>
                <button > create question</button>
            </div>
        </div>
    )
 }
 export default CreateQuiz;