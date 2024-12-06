import styles from "./ContentOverview.module.css"
import Footer from "./Footer";
import Nav from "./navigation/Nav";
import ContentListCont from "./ContentListCont";
import Edit from "./edit/Edit";
import { useState } from "react";
function ContentOverview({content}) {
    let message = (content == "course" ? "course": "program");
    const [edit, setEdit] = useState(false);
    const toggleEdit = ()=> {
        if (!edit){
            setEdit(true);
        }
        else {
            setEdit(false);   
        }
    }
    
    return (
        <div className={styles.contentOverview}>
            <Nav />
            
            <h1>{message}</h1>
            <button>delete {message}</button>
            <button onClick={toggleEdit}> edit {message}</button>
            { edit ? 
                <Edit content={ message }/> 
                : null
            }
            <div className={styles.providerLogo}> logo</div>
            <div className={styles.description}> description</div>
            <div className={styles.enrollButton}> 
                <button>apply</button>
            </div>
            <div className={styles.about}> about </div>
            <div className={styles.contentList}>
            <ContentListCont content={message === "course" ? "module" : "course" } />
            </div>
            <Footer />

        </div>
    )
}

export default ContentOverview;