import styles from "./Edit.module.css"
function EditLearningItem({content}){
    return (
        <div className={content == "learningItem" ? styles.learningItem : styles.hide}>
            <div className={styles.fields}>
                <form >
                    <input type="text" placeholder="learning item's name"/>
                </form>
                <h2>new learning item's type</h2>
                <button>a video</button>
                <button>a reading</button>
                <div className={styles.vid}> 
                    <h2> upload a  new vid</h2>
                    <input type="file"/>
                </div>
                <div className={styles.reading}> 
                    <h2> update reading</h2>
                    <button>add text</button>
                    <button>add image</button>
                    <input type="file"/>
                </div>
                <button> update learning item</button>
            </div>
        </div>
    )
}

export default EditLearningItem;
