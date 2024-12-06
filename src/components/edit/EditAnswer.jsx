import styles from "./Edit.module.css"
function EditAnswer({content}){
    return (
        <div className={content == "ans" ? styles.ans : styles.hide}>
            <form >
                <input type="text" placeholder="new answer" />
                <button> update answer</button>
            </form>
        </div>
    )
}

export default EditAnswer;
