import { Link, Outlet } from "react-router-dom";
import ModuleOverview from "../components/ModuleOverview";
import styles from "./ContentListCont.module.css"
import Applications from "../components/Applications";
function ContentListCont({content}) {
    // A component to display a ContentListCont's detail
    console.log(content)
    let path = (content == "program" ? "/course/" :   
                content == "module" ? "/course/module" :   
                content ==  "learning items" ? "/course/module/learningItem": 
                "/course/" )
    
    return (
        <div className={styles.contentListCont}>
            
            <div>
                <h1>{content} List</h1>
                <ul>
                    
                    <li>
                        <Link to={ path }> {content == "program" ? 'course' : content} </Link>
                        <button>delete</button>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default ContentListCont;