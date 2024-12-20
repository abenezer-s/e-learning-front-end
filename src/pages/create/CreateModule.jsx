import styles from "./CreateModule.module.css"
import { Link, Outlet } from "react-router-dom";
import CreateLearningItem from "./CreateLearningItem";
import { useState } from "react";
import CreateQuiz from "./CreateQuiz";

function CreateModule({setCourseItem}){
    const [clicked, setClicked] = useState({
        createLearning:false,
        createQuiz:false
    });
    // const [formData, setFormData] = useState({    });
    const [moduleItem,setModuleItem] = useState({
        title:'',
        description:'',
        items:[],
    })
    console.log("MODULE item", moduleItem)
    const handleAddLearning = ()=> {
        console.log("Clicke status", clicked.createLearning);
        if (!clicked.createLearning){
            console.log("HERE");
            setClicked( 
                prevState => (
                    {
                        ...prevState,
                        createLearning:true,
                    }
                 ));
        } else {
            setClicked( 
                prevState => (
                    {
                        ...prevState,
                        createLearning:false,
                    }
                 ));
        }
    }
    const handleAddQuiz = ()=> {
        console.log("Clicke status", clicked.createLearning);
        if (!clicked.createQuiz){
            console.log("HERE");
            setClicked( 
                prevState => (
                    {
                        ...prevState,
                        createQuiz:true,
                    }
                 ));
        } else {
            setClicked( 
                prevState => (
                    {
                        ...prevState,
                        createQuiz:false,
                    }
                 ));   
        }
    }
    const handleChange = (event)=>{
        const {name, value} = event.target;
        setModuleItem(
            prevState => ({
                ...prevState,
                [name]:value,
            })
        )
    }
    const handleFinish = ()=>{
        setCourseItem(
            prevState => ({
                ...prevState,
                modules:[...prevState.modules, moduleItem],
            })
        )

    }
    return (
        <div className={styles.createModule}>
            <h1>Create a Module</h1>
            <Link to="/create"> back </Link>
            <div className={styles.fields}>
            {console.log("BEFORE ADD LE clicked:", clicked.createLearning)}
                <input 
                    onChange={handleChange}
                    name="title"
                    value={moduleItem.title}
                    type="text" 
                    placeholder="module's title"/>
                <input 
                    onChange={handleChange}
                    name="description"
                    value={moduleItem.description}
                    type="text" 
                    placeholder="description"/>
                <div>

                    <h2>add learning items(atleat one)</h2>
                    <div className={styles.moduleItem}>
                        <h3>learning items will be listed here</h3>
                        { moduleItem.items.map((item, index)=>(
                            // <p>{item.title} {item.type}</p>
                            item.title ? <p> {item.title}</p> : <p>item does not have titel</p>
                            
                        ))}
                        
                    </div>
                    <button onClick={handleAddLearning}>
                        ADD LE 
                    </button>
                    {clicked.createLearning ? 
                        <CreateLearningItem 
                            clicked={clicked} 
                            setClicked={setClicked}
                            setModuleItem={setModuleItem}/> :
                            null}
                    <div>
                        <button onClick={handleAddQuiz}>Add quiz</button>
                        <CreateQuiz 
                            clicked={clicked} 
                            setClicked={setClicked}
                            setModuleItem={setModuleItem}
                        />
                    </div>
                </div>

            </div>
            <button onClick={handleFinish} > finished with module </button>
        </div>
    )
 }

 export default CreateModule;