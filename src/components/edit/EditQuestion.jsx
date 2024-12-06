import styles from "./Edit.module.css"
function EditQuestion({content}){
    return (
        <div className={content == "question" ? styles.question : styles.hide}>
            <form >
                <input type="text" placeholder="new quesion" />
                <button> update quesion</button>
            </form>                
            <button> add choice</button>
        </div>
    )
}

export default EditQuestion;
