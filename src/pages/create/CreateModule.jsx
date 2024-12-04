import styles from "./CreateModule.module.css"
import { Link, Outlet } from "react-router-dom";
import CreateLearningItem from "./CreateLearningItem";

function CreateModule(){
    return (
        <div className={styles.createModule}>
            <h1>Create a Module</h1>
            <Link to="/dashboard/create"> back </Link>
            <div className={styles.fields}>
                <form >
                    <input type="text" placeholder="modul's name"/>
                    <input type="text" placeholder="description"/>
                </form>

                <div>
                    <h2>add learning items(atleat one)</h2>
                    <button>+</button>
                    <div className={styles.addLearningItems}>
                    <CreateLearningItem />
                    </div>
                    <div className={styles.quiz}> 
                        <h2> create a quiz</h2>
                        <Link to="/dashboard/create/module/quiz">
                            <button>creat quiz</button>
                        </Link>
                    </div>
                    <Outlet />
                    <div  className={styles.addToCourse}>
                        <h2>add to course</h2>
                        choose from courses
                    </div>
                    
                    <button type="submit"> finish</button>
                </div>
                
                

            </div>
        </div>
    )
 }

 export default CreateModule;