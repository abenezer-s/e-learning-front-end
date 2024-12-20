import { useState } from "react";
import styles from "./CreateCourse.module.css"
import { Link, Outlet } from "react-router-dom";
import CreateModule from "./CreateModule";
function CreateCourse(){
    const [addMod, setAddMod] = useState(false);
    const [courseItem, setCourseItem] = useState({course_name:'',
                                     description:'', 
                                     est_dur:0,  
                                     deadline:0,
                                     modules:[],
                                    })
    const handleChange = (event)=>{
        const { name, value } = event.target;
        setCourseItem(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    }
    
    const handleSubmit = () =>{
        const moduleLength =  courseItem.modules.length;
        
            if(!courseItem.course_name ||
                !courseItem.est_dur || 
                !courseItem.description || 
                !courseItem.deadline ){
    
                alert("all fields must be filled");
            } else {
                alert("valid submission!");
            } 
            if (moduleLength == 0) {
            alert("must create atleast one module!");
        }
    }

    const addModule = ()=>{
        addMod ? setAddMod(false) : setAddMod(true);

    }
    console.log("course item", courseItem);
    return (
        <div className={styles.createCourse}>
            <h1>Create Course</h1>
            <Link to="/dashboard/create"> back </Link>
            <div className={styles.fields}>
                <input
                    onChange={handleChange}
                    name="course_name" 
                    value={courseItem.course_name} 
                    type="text"
                    placeholder="course's name"/>
                <input
                    onChange={handleChange} 
                    name="description" 
                    value={courseItem.description} 
                    type="text" 
                    placeholder="description"/>
                <input 
                    onChange={handleChange} 
                    name="est_dur" 
                    value={courseItem.est_dur}
                    type="number" 
                    placeholder="estimated duration"/>
                <input 
                    onChange={handleChange} 
                    name="deadline" 
                    value={courseItem.deadline}
                    type="number" 
                    placeholder="deadline"/>
                    <h2>add module</h2>
                    <button onClick={addModule}>add module</button>
                <div className={addMod ? styles.createModule : styles.hide}>
                    <CreateModule setCourseItem={setCourseItem} />
                </div>
                <button onClick={handleSubmit}> finished with course</button>
            
            </div>
        </div>
    )
 }

 export default CreateCourse;