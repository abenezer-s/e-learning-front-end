import styles from "./CreateCourse.module.css"
import { Link, Outlet } from "react-router-dom";
function CreateCourse(){
    return (
        <div className={styles.createCourse}>
            <h1>Create Course</h1>
            <Link to="/dashboard/create"> back </Link>
            <div className={styles.fields}>
                <form >
                    <input type="text" placeholder="course's name"/>
                    <input type="text" placeholder="description"/>
                    <input type="number" placeholder="estimated duration"/>
                    <input type="number" placeholder="deadline"/>
                </form>

                <div>
                    <h2>add module</h2>
                    <Link to="/dashboard/create/module">
                        <button>add module</button>
                    </Link>
                    <button type="submit"> finish</button>
                </div>
                

            </div>
        </div>
    )
 }

 export default CreateCourse;