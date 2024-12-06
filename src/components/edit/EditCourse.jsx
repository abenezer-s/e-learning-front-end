import styles from "./Edit.module.css"
function EditCourse({content}){
    return (
        <div className={content == "course" ? styles.course : styles.hide}>
            <form >
                <input type="text" placeholder="new name" />
                <input type="text" placeholder="new description" />
                <input type="number" placeholder="new deadline" />
                <input type="number" placeholder="new estimated duration" />
                <button> update course</button>
            </form>
        </div>
    )
}

export default EditCourse;
