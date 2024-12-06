import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import styles from "./ModuleOverview.module.css"
import ContentListCont from './ContentListCont';

function ModuleOverview({content}){
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

            {/* <Learnings /> */}
            <Link to="/course/module/learningItem"> Learning Items</Link>
            {/* <Link to="/course/module/Quiz"> Learnings Item </Link> */}
            
            <Outlet />
            
            


        </div>
    )
}

export default ModuleOverview;