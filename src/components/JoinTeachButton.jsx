import { useNavigate } from 'react-router-dom'
import styles from './JoinTeachButton.module.css'
function  JoinTeachButton (){
    const navigate = useNavigate()
    const registerTeacher = ()=> {
        navigate("/auth", {state: "teacher"})
    }
    return (
        <div className={styles.teach}>
            <button onClick={registerTeacher} className={styles.teachJoinButton}>
                                Teach
            </button>
        </div>
        
    )
}

export default JoinTeachButton;