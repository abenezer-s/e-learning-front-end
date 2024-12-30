import { useContext, useEffect, useState } from "react";
import styles from "./Form.module.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Form({state}) {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    console.log('FORM RENDERED state:', state);

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

    useEffect(() => {
        console.log('Updated user:', user);
        console.log('user logged in:', user.loggedIn);
        if(user.loggedIn){
            console.log("NAVIAGTING TO DASHBOARD")
            navigate('/dashboard');
        }
    }, [user]); // This effect runs whenever UserCreator changes

    const handleSubmit = async (event)=>{
        event.preventDefault(); 
        let storedUser = JSON.parse(localStorage.getItem('user'));
        console.log("STORED USER in FORM",storedUser);
        if(state == "signIn"){
            console.log(`user name ${formData.username} password ${formData.password}`);
            try{
                const response = await axios.post('/api/users/login/', {
                    username: formData.username,
                    password: formData.password,
    
                });
                const {access, refresh, creator} = response.data;
                console.log('received access TOKEN', access);
                console.log('CREATOR', creator);
                storedUser.isCreator = creator;
                storedUser.loggedIn = true;
                localStorage.setItem('user', JSON.stringify(storedUser));
                const updatedUser = JSON.parse(localStorage.getItem('user'));
                setUser(storedUser);
                console.log(`stored updated to ${updatedUser} and  user state${user}`);
            }catch (error){
                console.log('error', error);
                console.log()
            }
        } else {
            // register user
            if(!formData.username ||
                !formData.first_name || 
                !formData.last_name || 
                !formData.email || 
                !formData.password ){
                alert("all fields must be filled");
            } else {
                const register = async ()=>{
                    const response = await axios.post(`/api/users/sign-up/${user.creator ? "creator" : "learner"}/`, {
                        username : formData.username,
                        first_name: formData.first_name, 
                        last_name : formData.last_name, 
                        email: formData.email, 
                        password: formData.password       
                    })
                    console.log("registerd", response.data);
                    navigate('/dashboard');
                }
                register();
                
            }
            if (formData.password !== formData.re_password){
                alert("passwords don't match!");
            }
        }
        
        

    }
    return (
        <div className={styles.formComp}>
                    
            <form onSubmit={handleSubmit}>
                <input 
                    onChange={handleChange} 
                    name="username" 
                    value={formData.username} 
                    type="text"  
                    className={styles.inputs} 
                    placeholder="username"/>
                <input 
                    onChange={handleChange} 
                    name="first_name" 
                    value={formData.first_name} 
                    type="text" 
                    className={state != 'signIn' ? styles.inputs : styles.hide} 
                    placeholder="first name"/>
                <input 
                    onChange={handleChange} 
                    name="last_name" 
                    value={formData.last_name} 
                    type="text" 
                    className={state != 'signIn' ? styles.inputs : styles.hide} 
                    placeholder="last name"/>
                <input 
                    onChange={handleChange}    
                    name="email" 
                    value={formData.email} 
                    type="email" 
                    className={state != 'signIn' ? styles.inputs : styles.hide} 
                    placeholder="email@email.com"/>
                <input 
                    onChange={handleChange} 
                    name="password" 
                    value={formData.password} 
                    type="password" 
                    className={styles.inputs} 
                    placeholder="password"/>
                <input 
                    onChange={handleChange} 
                    name="re_password" 
                    value={formData.re_password} 
                    type="password" 
                    className={state != 'signIn' ? styles.inputs : styles.hide} 
                    placeholder="confirm password"/>    
                <button type="submit"  className={styles.inputs}> 
                    {state == "signIn" ? "log in" :"sign up"}
                </button>
            </form>

        </div>
    )
}

export default Form;