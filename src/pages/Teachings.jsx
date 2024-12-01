import ContentContainer from "../components/ContentContainer";
import styles from "./Teachings.module.css"
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
function Teachings(){
    return (
        <div className={styles.teachings}>
            <button> Courses</button>
            <button> programs</button>
            <ContentContainer />
            <Footer />
            
        </div>
    )
 }

 export default Teachings;