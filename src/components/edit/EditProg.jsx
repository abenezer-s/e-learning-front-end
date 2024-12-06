import styles from "./Edit.module.css"
function EditProg({content}){

    return (
        <div className={content == "program" ? styles.prog : styles.hide}>
            <form >
                <input type="text" placeholder="new name" />
                <input type="text" placeholder="new description" />
                <input type="number" placeholder="new deadline" />
                <input type="number" placeholder="new estimated duration" />
                <button> update prog</button>
            </form>
        </div>
    )
}

export default EditProg;