import { useState } from "react";
import Edit from "./edit/Edit";
import styles from "./PossAns.module.css"
function PossAns() {
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
        <div className={styles.possAns}>
            <h3> choice </h3>
            <button onClick={toggleEdit}>edit choice</button>
            {edit ?
                <Edit content="possAns" />
                :
                null
            }
            <button>delete choice</button>
            
            
        </div>
    )
}

export default PossAns;