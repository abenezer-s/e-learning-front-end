import Learnings from "../components/Learnings";
import ModuleOverview from "../components/ModuleOverview";
import styles from "./CourseModule.module.css"
import ContentListCont from "../components/ContentListCont";
import Edit from "../components/edit/Edit";
import { useState } from "react";
function CourseModule() {
    
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
        <div className={styles.courseModule}>
            <h1>module</h1>
            <button onClick={toggleEdit}>edit module</button>
            {edit ?
                <Edit content="module" />
                :
                null
            }
            <button>delete module</button>
            <div>
                <h1>module name</h1>
                <h1>description</h1>

            </div>
            
            
            <Learnings />            
            <ContentListCont content="learning items" />
        </div>
    )
}

export default CourseModule;