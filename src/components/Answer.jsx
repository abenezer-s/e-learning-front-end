import { useState } from "react";
import Edit from "./edit/Edit";
import styles from "./Answer.module.css"
function Answer() {
    // A component for the answer of a question.
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
        <div className={styles.answer}>
            <h3> Answer </h3>
            <button onClick={toggleEdit}>edit Answer</button>
            {edit ?
                <Edit content="ans" />
                :
                null
            }
            
            
        </div>
    )
}

export default Answer;