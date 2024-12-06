import styles from "./Edit.module.css"
function EditQuiz({content}){
    return (
        <div className={content == "quiz" ? styles.quiz : styles.hide}>
            
            <form >
                <input type="text" placeholder="new name" />
                <input type="text" placeholder="new description" />
                <input type="number" placeholder="new pass socre" />
                
                <button> add question</button>
            
                <button> update quiz</button>
            </form>
        </div>
    )
}

export default EditQuiz;
