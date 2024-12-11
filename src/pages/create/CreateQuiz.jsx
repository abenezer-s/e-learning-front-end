import { useState } from "react";
import CreateQues from "./CreateQues";
import styles from "./CreateQuiz.module.css"
import { Link, Outlet } from "react-router-dom";
function CreateQuiz({clicked, setClicked, setModuleItem}){
    const [addQues, setAddQues] =useState(false)
    const [quizObj, setQuizObj] = useState({
        type:"quiz",
        title:'',
        questions:[]
    })

    const handleDone = ()=> {
        setModuleItem(
            prevState =>({
                ...prevState,
                items:[...prevState.items, quizObj]
            })
        )
        setClicked(
            prevState => ({
                ...prevState,
                createQuiz: false,
            }));
        
    }
    const handleInput = (event)=>{
        setQuizObj(
            prevState => ({
                ...prevState,
                title: event.target.value
            })
        )
    }

    const hanldeAddQues = ()=> {
        setAddQues(addQues ? false : true);
            // prevState => ({
            //     ...prevState,
            //     createQuiz: false,
            // }));
        console.log("LE:", learningItemObj);
    }

    console.log("quiz", quizObj);
    return (
        <div className={clicked.createQuiz ? styles.createQuiz : styles.hide}>
            <h1>Create a quiz</h1>
            <button>close</button> 
            <input 
                onChange={handleInput}
                type="text" 
                placeholder="quiz title" />
            <h2>add a question</h2>
            <div className={styles.questions}>
                created questions appear here
                {quizObj.questions.map((questionObj, index)=>(
                    <div>
                        {questionObj.question.content}
                        <button>X</button>
                    </div>
                ))}
                
            </div>
            <button onClick={hanldeAddQues}>add question</button>                
            {addQues ?
                <CreateQues setAddQues={setAddQues} setQuizObj={setQuizObj}/> 
                :
                null
            }

            <button onClick={handleDone}>done</button>
        </div>
    )
 }
 export default CreateQuiz;