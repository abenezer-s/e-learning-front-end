import styles from "./Edit.module.css"
function EditModule({content}){
    return (
        <div className={content == "module" ? styles.module : styles.hide}>

            <form >
                <input type="text" placeholder="new name" />
                <input type="text" placeholder="new description" />
                <button> update module</button>
            </form>

        </div>
    )
}

export default EditModule;
