import styles from "./Edit.module.css"
function EditPossibleAnswer({content}){
    return (
        

        <div className={content == "possAns" ? styles.possAns : styles.hide}>
        <form >
            <input type="text" placeholder="new choice(possible answer)" />
            <button> update possible answer</button>
        </form>
        </div>
    )
}

export default EditPossibleAnswer;
