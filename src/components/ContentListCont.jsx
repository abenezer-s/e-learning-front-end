import { Link, Outlet } from "react-router-dom";
import ModuleOverview from "../components/ModuleOverview";
import styles from "./ContentListCont.module.css"
import Applications from "../components/Applications";
function ContentListCont({content}) {
    // A component to display a ContentListCont's detail
    
    return (
        <div className={styles.contentListCont}>
            
            <div>
                <h1>{content} List</h1>
                <ul>
                    <Link to="/course/module/learningItem"> learning item </Link>
                    <button>delete</button>
                </ul>

            </div>
        </div>
    )
}

export default ContentListCont;