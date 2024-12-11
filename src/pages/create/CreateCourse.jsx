import { useState } from "react";
import styles from "./CreateCourse.module.css"
import { Link, Outlet } from "react-router-dom";
function CreateCourse(){
    const [formData, setFormData] = useState({course_name:'',
                                     description:'', 
                                     est_dur:0,  
                                     deadline:null})
    const handleChange = (event)=>{
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    }
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        if(!formData.course_name ||
            !formData.est_dur || 
            !formData.description || 
            !formData.deadline ){

            alert("all fields must be filled");
        } else {
            alert("valide submission!");
        }
        
    }
    return (
        <div className={styles.createCourse}>
            <h1>Create Course</h1>
            <Link to="/dashboard/create"> back </Link>
            <div className={styles.fields}>
                <form onSubmit={handleSubmit}>
                    <input
                        onChange={handleChange}
                        name="course_name" 
                        value={formData.course_name} 
                        type="text"
                        placeholder="course's name"/>
                    <input
                        onChange={handleChange} 
                        name="description" 
                        value={formData.description} 
                        type="text" 
                        placeholder="description"/>
                    <input 
                        onChange={handleChange} 
                        name="est_dur" 
                        value={formData.est_dur}
                        type="number" 
                        placeholder="estimated duration"/>
                    <input 
                        onChange={handleChange} 
                        name="deadline" 
                        value={formData.deadline}
                        type="number" 
                        placeholder="deadline"/>
                    <div>
                        <h2>add module</h2>
                        <Link to="/create/module">
                            <button>add module</button>
                        </Link>
                    </div>
                    <button type="submit"> finish</button>
                </form>
            </div>
        </div>
    )
 }

 export default CreateCourse;