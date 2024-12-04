import styles from "./CreateProg.module.css"
import { Link, Outlet } from "react-router-dom";
function CreateProg(){
    return (
        <div className={styles.createProg}>
            <h1>Create Program</h1>
            <Link to="/dashboard/create"> back </Link>
            <div className={styles.fields}>
                <form >
                    <input type="text" placeholder="program's name"/>
                    <input type="text" placeholder="description"/>
                    <input type="number" placeholder="estimated duration"/>
                    <input type="number" placeholder="number of weeks"/>
                </form>

                <div>
                    <h2>add courses (optional)</h2>
                    <div className={styles.addCourse}>
                        courses you own will appear here. <br/>
                        you can skip to next step
                    </div>
                    <button type="submit"> finish</button>
                </div>
                

            </div>
        </div>
    )
 }

 export default CreateProg;