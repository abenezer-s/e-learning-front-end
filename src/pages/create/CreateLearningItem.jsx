import styles from "./CreateLearningItem.module.css"
import { Link, Outlet } from "react-router-dom";
function CreateLearningItem(){
    return (
        <div className={styles.createLearningItem}>
            <h1>Create a learning item</h1>
            <button>close</button>
            <div className={styles.fields}>
                <form >
                    <input type="text" placeholder="learning item's name"/>
                </form>
                <h2>choose learning item's type</h2>
                <button>a video</button>
                <button>a reading</button>
                
                <div className={styles.vid}> 
                    <h2> upload a vid</h2>
                    <input type="file"/>
                </div>
                <div className={styles.reading}> 
                    <h2> create a reading</h2>
                    <button>add text</button>
                    <button>add image</button>
                    <input type="file"/>
                </div>

                <button> done</button>
                
                

            </div>
        </div>
    )
 }

 export default CreateLearningItem;