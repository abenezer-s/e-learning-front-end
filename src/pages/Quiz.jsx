import { useState } from "react";
import Edit from "../components/edit/Edit";
import styles from "./Quiz.module.css"
import Question from "../components/Question";
function Quiz() {
    const [edit, setEdit] = useState(false);
    const toggleEdit = ()=> {
        if (!edit){
            setEdit(true);
        }
        else {
            setEdit(false);   
        }
    }
    return (
        <div className={styles.quiz}>
            <h3> Quiz </h3>
            <button onClick={toggleEdit}>edit quiz</button>
            {edit ?
                <Edit content="quiz" />
                :
                null
            }
            <button>delete quiz</button>
            <Question />
            <button> submit answers</button>
        </div>
    )
}

export default Quiz;