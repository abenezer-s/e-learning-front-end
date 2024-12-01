import styles from "./Create.module.css"
import { Link, Outlet } from "react-router-dom";
function Create(){
    return (
        <div className={styles.create}>
            <h1>Create</h1>
            <Link to="/"> Home </Link>
            <Link to="/dashboard/create/program">
                <button> create a program</button>
            </Link>
            <Link to="/dashboard/create/course">
                <button> create a course</button>
            </Link>
            <Link to="/dashboard/create/module">
                <button> create a module</button>
            </Link>

            <Outlet />
        </div>
    )
 }

 export default Create;