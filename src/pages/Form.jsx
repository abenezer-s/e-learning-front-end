import { useState } from "react";
import styles from "./Form.module.css"
function Form() {
    const [formData, setFormData] = useState({
            username:'',
            first_name:'',
            last_name:'', 
            email:'',
            password:'', 
            re_password:'',})
    const handleChange = (event)=> {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData, [name]: value
        }));
    }
    const handleSubmit = (event)=>{
        event.preventDefault(); 
        if(!formData.username ||
            !formData.email || 
            !formData.first_name || 
            !formData.last_name || 
            !formData.email || 
            !formData.password ){
            alert("all fields must be filled");
        } else {
            alert("valide signup!");
        }
        if (formData.password !== formData.re_password){
            alert("passwords don't match!");
            return;
        }
        

    }
    return (
        <div className={styles.formComp}>
                    
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} name="username" value={formData.username} type="text"  className={styles.inputs} placeholder="username"/>
                <input onChange={handleChange} name="first_name" value={formData.first_name} type="text" className={styles.inputs} placeholder="first name"/>
                <input onChange={handleChange} name="last_name" value={formData.last_name} type="text" className={styles.inputs} placeholder="last name"/>
                <input onChange={handleChange} name="email" value={formData.email} type="email" className={styles.inputs} placeholder="email@email.com"/>
                <input onChange={handleChange} name="password" value={formData.password} type="password" className={styles.inputs} placeholder="password"/>
                <input onChange={handleChange} name="re_password" value={formData.re_password} type="password" className={styles.inputs} placeholder="confirm password"/>    
                <button type="submit"  className={styles.inputs}> sign up</button>
            </form>

        </div>
    )
}

export default Form;