import Nav from "../../components/navigation/Nav";
import SideNavBar from "../../components/navigation/SideNavBar";
import styles from "./Create.module.css"
import { Link, Outlet } from "react-router-dom";
function Create(){
    return (
        <div className={styles.create}>
            <Nav />
            <SideNavBar />
            <h1>Create</h1>
            <Link to="/dashboard"> dashboard </Link>
            <Link to="/create/program">
                <button> create a program</button>
            </Link>
            <Link to="/create/course">
                <button> create a course</button>
            </Link>
            {/* <Link to="/create/module">
                <button> create a module</button>
            </Link> */}

            <Outlet />
        </div>
    )
 }

 export default Create;