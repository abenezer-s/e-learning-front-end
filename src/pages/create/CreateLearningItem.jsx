import { useState } from "react";
import styles from "./CreateLearningItem.module.css"
import { Link, Outlet } from "react-router-dom";
function CreateLearningItem({clicked, setClicked}){
    const [learningItemObj,setLearningItemObj] = useState({
        video:true, //bolean true if content is a vid false if a reading
        content: null
    })
    const [readingObj, setReadingObj] = useState({
        readingItems:[] //list contains reading item object with "type"  and "content" keys
    })

    const handleDone = ()=> {
        setClicked(false);
    }
    const handleVideoItem = ()=> {
        setLearningItemObj(
            prevState => ({
                ...prevState,
                video:true
            })
        );
    }
    const handleReadingItem = ()=> {
        setLearningItemObj(
            prevState => ({
                ...prevState,
                video:false
            })
        );
    }

    const handleCreateVid = (event)=>{
        const vid = event.target.files[0];
        setLearningItemObj((prevState) => ({
                ...prevState,
                content: vid,
            })
        );
        console.log("recieved file", learningItemObj.content)
    }

    return (
        <div className={clicked ? styles.createLearningItem : styles.hide}>
            <h1>Create a learning item</h1>
            <button>close</button>
            <div className={styles.fields}>
                
                    <input type="text" placeholder="learning item's name"/>                
                    <h2>choose learning item's type</h2>
                    <div >
                        <button onClick={handleVideoItem}>
                            a video
                        </button>
                        <button onClick={handleReadingItem}>
                            a reading
                        </button>
                    </div>
                    

                    <div className={learningItemObj.video ? styles.vid : styles.hide}> 
                        <h2> upload a vid</h2>
                        <input 
                            onChange={handleCreateVid} 
                            name="content"
                            type="file"
                        />
                    </div>
                   <div className={!learningItemObj.video ? styles.reading : styles.hide}>
                        <h2> create a reading</h2>
                        <input 
                            onChange={handleText}
                            name="readingItem"
                            type="text" 
                            placeholder="enter a paragraph"/>
                        <button >add text</button>
                        <input type="file"/>
                        <button>add image</button>
                    </div>

                    <button onClick={handleDone}> done</button>
            </div>
        </div>
    );
 }

 export default CreateLearningItem;