import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import styles from "./ModuleOverview.module.css"

function ModuleOverview(){
    return (
        <div className={styles.moduleOverview}>
                <h1>module overview</h1>            
            <div className={styles.moduleTitle}>
                <h2>
                    module title
                </h2>
            </div>
            <div  className={styles.moduleDesc}>
                <h2>
                    module desc
                </h2>
            </div>

            {/* <Lesson /> */}
            <Link to="/course/module/lesson"> Lesson  Item</Link>
            {/* <Link to="/course/module/Quiz"> Lesson Item </Link> */}
            <Outlet />
            
            


        </div>
    )
}

export default ModuleOverview;