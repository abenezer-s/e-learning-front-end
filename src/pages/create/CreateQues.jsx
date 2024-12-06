import CreateChoice from "./CreateChoice";
import styles from "./CreateQues.module.css"
function CreateQues() {
    return (
        <div className={styles.createQues}>
            <div className={styles.questions}>
                created questions appear here
                <button>X</button>
            </div>
            <div className={styles.fields}>
                <button>+</button>                
                <form >
                    <input type="text" placeholder="write your question here"/>
                </form>
                <h2>question type</h2>
                <button>multiple choice</button>
                <button>fill blank space</button>
                <div className={styles.choice}> 
                    <h2>add choices</h2>
                    <CreateChoice />
                </div>
                <div className={styles.reading}> 
                    <h2> enter answer for question</h2>
                if multiple choice add the choice number(like choice_1)
                    <input type="text" placeholder="write answer"/>
                </div>
                <button > create question</button>
            </div>
        </div>
    )
}

export default CreateQues;