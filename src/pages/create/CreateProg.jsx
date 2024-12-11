import { useState } from "react";
import styles from "./CreateProg.module.css"
import { Link, Outlet } from "react-router-dom";
function CreateProg(){
    const [formData, setFormData] = useState({prog_name:'', description:'', est_dur:0, deadline:0})
    const handleChange = (event)=>{
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    }
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        if(!formData.prog_name ||
            !formData.est_dur || 
            !formData.description || 
            !formData.deadline ){

            alert("all fields must be filled");
        } else {
            alert("valide submission!");
        }
        
    }
    return (
        <div className={styles.createProg}>
            <h1>Create Program</h1>
            <Link to="/dashboard/create"> back </Link>
            <div className={styles.fields}>
                <form onSubmit={handleSubmit}>
                    <input 
                        onChange={handleChange} 
                        name="prog_name" 
                        value={formData.prog_name} 
                        type="text" 
                        placeholder="program's name"
                    />
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
                        placeholder="deadlilne"/>

                        <div>
                            <h2>add courses (optional)</h2>
                            <div className={styles.addCourse}>
                                courses you own will appear here. <br/>
                                you can skip to next step
                            </div>
                        </div>

                        <button type="submit"> finish</button>
                </form>

                
                

            </div>
        </div>
    )
 }

 export default CreateProg;