import styles from "./CreateModule.module.css"
import { Link, Outlet } from "react-router-dom";
function CreateModule(){
    return (
        <div className={styles.createModule}>
            <h1>Create Program</h1>
            <Link to="/dashboard/create"> back </Link>
            <div className={styles.fields}>
                <form >
                    <input type="text" placeholder="course's name"/>
                    <input type="text" placeholder="description"/>
                    <input type="number" placeholder="estimated duration"/>
                    <input type="number" placeholder="deadline"/>
                </form>

                <div>
                    <h2>add modules (optional)</h2>
                    <div className={styles.addModule}>
                        modules you own will appear here. <br/>
                        you can skip to next step
                    </div>
                    <button type="submit"> finish</button>
                </div>
                

            </div>
        </div>
    )
 }

 export default CreateModule;