import styles from "./CreateModule.module.css"
import { Link, Outlet } from "react-router-dom";
import CreateLearningItem from "./CreateLearningItem";
import { useState } from "react";

function CreateModule(){
    const [clicked, setClicked] = useState(false);
    // const [formData, setFormData] = useState({    });
    const handleAdd = ()=> {
        if (!clicked){
            console.log("HERE");
            setClicked(true);
            
        } else {
            setClicked(false);
            console.log("HERE");
        }
    }

    // const handleChange = (event)=>{

    // }
    // const handleSubmit = (event)=>{

    // }
    return (
        <div className={styles.createModule}>
            <h1>Create a Module</h1>
            <Link to="/create"> back </Link>
            <div className={styles.fields}>
            {console.log("BEFORE ADD LE clicked:", clicked)}
                <form > {/*onSubmit={handleSubmit} >*/}
                    <input type="text" placeholder="module's name"/>
                    <input type="text" placeholder="description"/>
                    <button type="submit"> finish</button>
                </form>

                <div>
                    <h2>add learning items(atleat one)</h2>
                    <div className={styles.learningItems}>
                        <h3>learning items will be listed here</h3>
                    </div>
                    <button onClick={handleAdd}>
                        ADD LE 
                    </button>
                    {clicked ? <CreateLearningItem clicked={clicked} setClicked={setClicked}/> : null}
                    
                    <div  className={styles.addToCourse}>
                        <h2>add to course</h2>
                        choose from courses
                    </div>
                </div>

            </div>
        </div>
    )
 }

 export default CreateModule;