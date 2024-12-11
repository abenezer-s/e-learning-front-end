import { useState } from "react";
import styles from "./CreateChoice.module.css"
function CreateChoice({questionObj, setQuestionObj}){
    const[choice, setChoice] = useState();
    const enter = (event) => {
        const quesChoice = choice;
        if (event.key === "Enter") {
            console.log("ENTER");
            setQuestionObj(
                prevState => ({
                    ...prevState,
                        choices:[
                            ...prevState.choices,
                            quesChoice
                        ]
                }));
        }
    };
    const addChoice = ()=>{ 
            const quesChoice = choice
            setQuestionObj(
                prevState => ({
                    ...prevState,
                        choices:[
                            ...prevState.choices,
                            quesChoice
                        ]
                }));
    }
    const handleChoice = (event)=> {
        const choice = event.target.value;
        setChoice(choice);
    }
    return (
        <div>
            <div className={styles.createChoice}>
                <div>
                    {questionObj.choices.map((choice, index)=>(
                        <div>
                            {choice }
                            <button>X</button>
                        </div>
                        
                    ))}
                
                </div>
                <input 
                    onChange={handleChoice}
                    onKeyDown={enter}
                    type="text" 
                    placeholder="write choice"/>
                <button  onClick={addChoice} > add choice</button>
            </div>
        </div>
    )
}
export default CreateChoice;