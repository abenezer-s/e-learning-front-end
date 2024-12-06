import styles from "./CreateChoice.module.css"
function CreateChoice(){
    return (
        <div>
            <div className={styles.createChoice}>
                <div>
                created choices appear here
                <button>X</button>
                </div>
                <button>add</button>
                <input type="text" placeholder="write choice"/>
            </div>
        </div>
    )
}
export default CreateChoice;