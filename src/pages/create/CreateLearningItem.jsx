import { useState } from "react";
import styles from "./CreateLearningItem.module.css"
import { Link, Outlet } from "react-router-dom";
function CreateLearningItem({clicked, setClicked, setModuleItem}){
    const [hasChosen, setHasChosen] = useState(false)
    const [learningItemObj,setLearningItemObj] = useState({
        type:"learning_item",
        video:true, //bolean true if content is a vid false if a reading
        title:'',
        content: {
            readingItems:{
                itemsList:[],
                paragraph:null,
                imgURL:null
            },
            video:null,
        },
    })
    const [readingObj, setReadingObj] = useState({
        readingItems:[], //list contains reading item object with "type"  and "content" keys
        paragraph:null,
        imgURL: null,
    })
    const handleDone = ()=> {
        console.log("LEARNIGN OBJ", learningItemObj);

        setModuleItem( (prevItems)=>({
            ...prevItems,
            items:[...prevItems.items, learningItemObj],
        }));

        setClicked(
            prevState => ({
                ...prevState,
                createLearning: false,
            }));
        console.log("LE:", learningItemObj);
    }
    const handleTitle = (event) => {
        const title = event.target.value;
        setLearningItemObj(
            prevState => ({
                ...prevState,
                title: title,
            })
        );
    }
    const handleVideoItem = ()=> {
        setLearningItemObj(
            prevState => ({
                ...prevState,
                video:true
            })
        );
        setHasChosen(true);
    }
    const handleReadingItem = ()=> {
        setLearningItemObj(
            prevState => ({
                ...prevState,
                video:false
            })
        );
        setHasChosen(true);
    }
    const handleCreateVid = (event)=>{
        const vid = event.target.files[0];
        setLearningItemObj((prevState) => ({
                ...prevState,
                content:{
                    ...prevState.content,
                    video: vid
                } 
            })
        );
        console.log("recieved file", learningItemObj.content)
    }

    const handleItem = (event, type)=> {
        if(type =="text"){
            //if input is text(paragraph) store text tempporaly in "paragraph" var
            const paragraph = event.target.value
            setLearningItemObj( (prevState) => ({
                ...prevState,
                content:{
                    ...prevState.content,
                    readingItems:{
                        ...prevState.content.readingItems,
                        paragraph:paragraph,
                    }
                }
            }))
            
        } else {
            const img = event.target.files[0];
            if(file){
                setLearningItemObj( (prevState) => ({
                    ...prevState,
                    content:{
                        ...prevState.content,
                        readingItems:{
                            ...prevState.content.readingItems,
                            imgURL: URL.createObjectURL(img),
                        }
                    }
                }))
            }
               
        }
        
    }
    console.log("paragraph", learningItemObj.content.readingItems.paragraph)

    const handleAddItem = (type)=> {
        // append paragraph to readingItems list.
        if(type == "text"){
            const paragraph = learningItemObj.content.readingItems.paragraph;
            if(paragraph){
                setLearningItemObj( (prevState) => ({
                    ...prevState,
                    content:{
                        ...prevState.content,
                        readingItems:{
                            ...prevState.content.readingItems,
                            itemsList:[
                                ...prevState.content.readingItems.itemsList,
                                {
                                    type:"para", 
                                    content:paragraph,
                                }
                            ]
                        }
                    }
                }))
                
                document.getElementById("paragraph").value = '';
            }
            
        } else {
                setLearningItemObj( (prevState) => ({
                    ...prevState,
                    content:{
                        ...prevState.content,
                        readingItems:{
                            ...prevState.content.readingItems,
                            itemsList:[
                                ...prevState.content.readingItems.itemsList,
                                {
                                    type:"img", 
                                    content:learningItemObj.content.readingItems.imgURL,
                                }
                            ]
                        }
                    }
                }))
                document.getElementById("file").value = null;
            }
        }
        
    console.log("1)reading items", learningItemObj.content.readingItems)

    return (
        <div className={clicked.createLearning ? styles.createLearningItem : styles.hide}>
            <h1>Create a learning item</h1>
            <button>close</button>
            <div className={styles.fields}>
                
                    <input 
                        onChange={handleTitle}
                        type="text" 
                        placeholder="learning item's name"/>                
                    <h2>choose learning item's type</h2>
                    <div className={!hasChosen ? styles.typeChoice : styles.hide} >
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
                        <div className={styles.readings}>
                            <h4>preview</h4>

                            {learningItemObj.content.readingItems.itemsList.map((item, index)=>(
                                item.type == "para" ?
                                 <p>  {item.content}</p> : 
                                 <img src={item.content} alt="img" width={200} /> 
                            ))}
                        </div>
                        <textarea 
                            id="paragraph"
                            onChange={(e)=>{handleItem(e, "text")}}
                            name="readingItems"
                            type="text" 
                            placeholder="enter a paragraph"/>
                        <button onClick={()=>{handleAddItem("text")}}>
                            add text
                        </button>
                        <input 
                            id="file"
                            onChange={(e)=>{handleItem(e, "img")}}
                            accept="image/*"
                            name="readingItems"
                            type="file"/>
                        <button onClick={()=>{handleAddItem("img")}}>
                            add image
                        </button>
                    </div>
                    <button onClick={handleDone}> done</button>
            </div>
        </div>
    );
 }

 export default CreateLearningItem;