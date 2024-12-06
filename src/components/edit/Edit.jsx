import styles from "./Edit.module.css"
import EditAnswer from "./EditAnswer";
import EditCourse from "./EditCourse";
import EditLearningItem from "./EditLearningItem";
import EditModule from "./EditModule";
import EditPossibleAnswer from "./EditPossibleAnswer";
import EditProg from "./EditProg";
import EditQuestion from "./EditQuestion";
import EditQuiz from "./EditQuiz";
import { Link } from "react-router-dom";

function Edit({content}){
    
    return (
        <div className={styles.edit}>
            <div>
            </div><Link to="/dashboard/"> back from edit </Link>
            <EditProg content={content}/>
            <EditCourse content={content}/>
            <EditModule content={content}/>
            <EditLearningItem content={content}/>
            <EditQuiz content={content}/>
            <EditQuestion content={content}/>
            <EditAnswer content={content}/>
            <EditPossibleAnswer content={content}/>
        </div>
    )
 }

 export default Edit;