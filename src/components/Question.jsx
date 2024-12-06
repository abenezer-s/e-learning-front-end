import { useState } from "react";
import Edit from "./edit/Edit";
import styles from "./Question.module.css"
import Answer from "./Answer";
import PossAns from "./PossAns";
function Question() {
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
        <div className={styles.question}>
            <h3> Question </h3>
            <button onClick={toggleEdit}>edit Question</button>
            {edit ?
                <Edit content="question" />
                :
                null
            }
            <button>delete quesion</button>
            <Answer />
            <div className={styles.choice}>
                <input type="radio" />
                <PossAns />
            </div>
            <input type="text" placeholder="blank space answer"/>
            
        </div>
    )
}

export default Question;