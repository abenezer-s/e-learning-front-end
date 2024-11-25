import styles from "./Form.module.css"
function Form() {
    return (
        <div className={styles.formComp}>
                    
            <form >
                <input type="text" className={styles.inputs} placeholder="username"/>
                <input type="text" className={styles.inputs} placeholder="first name"/>
                <input type="text" className={styles.inputs} placeholder="last name"/>
                <input type="email" className={styles.inputs} placeholder="email@email.com"/>
                <input type="password" className={styles.inputs} placeholder="password"/>
                <input type="password" className={styles.inputs} placeholder="confirm password"/>    
                <button type="submit"  className={styles.inputs}> sign up</button>
            </form>

        </div>
    )
}

export default Form;