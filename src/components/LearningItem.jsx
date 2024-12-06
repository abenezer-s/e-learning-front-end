import { useState } from "react";
import styles from "./LearningItem.module.css"
import Edit from "./edit/Edit";
function LearningItem(){
    // Page to show contents of a learning item. 
    // Example a reading or a video.
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
        <div className={styles.learningItem}>
            <h2>learning item</h2>
            <button onClick={toggleEdit}>edit learning item</button>
            {edit ?
                <Edit content="learningItem" />
                :
                null
            }
            <button>delete learning item</button>
            <div>
                content
                
            </div>
            <button>mark complete</button>
        </div>
    )
 }

 export default LearningItem;