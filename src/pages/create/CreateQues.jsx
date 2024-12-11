import { useState } from "react";
import CreateChoice from "./CreateChoice";
import styles from "./CreateQues.module.css"
function CreateQues({setAddQues, setQuizObj}) {
    
    const [questionObj, setQuestionObj] = useState({
        question:{
            type:'',
            content:'',
        },
        answer:'',
        choices:[]
    })

    const hanldeChange = (event)=>{
        const {name, value}= event.target;
        console.log("NAME", name)
        if(name == "question"){
            setQuestionObj(
                prevState => ({
                    ...prevState,
                    question:{
                        ...prevState,
                        content:value
                    }
                })
            )
        } else {
                setQuestionObj(
                    prevState => ({
                        ...prevState,
                        answer: value
                    })
                )
            }
    }

    console.log("CHANGE:", questionObj)
    const hanldeQuestion = (type)=>{
        type == "multi" ? 
            setQuestionObj(
                prevState => ({
                    ...prevState,
                    question: {
                        ...prevState.question,
                        type:"multi",
                    }
                })) 
                :
            setQuestionObj(
                prevState => ({
                    ...prevState,
                    question: {
                        ...prevState.question,
                        type:"blank_space",
                    }}));
    }

    const handleDone = ()=> {
        setAddQues(false);
        setQuizObj(
            prevState => ({
                ...prevState,
                questions:[...prevState.questions, questionObj],
            })
        )
    }
    console.log("TYPE", questionObj.question.type);

    return (
        <div className={styles.createQues}>
            <div className={styles.fields}>
                
                <input 
                    onChange={hanldeChange}
                    type="text" 
                    name="question"
                    value={questionObj.question.content}
                    placeholder="write your question here"/>
                <h2>question type</h2>
                <button onClick={
                    ()=>{hanldeQuestion('multi')}}>
                        multiple choice
                </button>
                <button onClick={
                    ()=>{hanldeQuestion('blank_space')}}>
                        fill blank space
                </button>
                <div className={
                        questionObj.question.type == "multi" ?
                        styles.choice : 
                        styles.hide
                    }> 
                    <h2>add choices</h2>
                    <CreateChoice questionObj={questionObj} setQuestionObj={setQuestionObj} />
                </div>
                <div className={styles.reading}> 
                    {questionObj.question.type == "multi" ?
                        <h3>add the choice number(like choice_1) for your multiple choice question</h3>
                        :
                        <h3>put in the answer for you blank space question</h3>
                    }
                    <input 
                        onChange={hanldeChange}
                        type="text" 
                        name="answer"
                        value={questionObj.answer}
                        placeholder="write answer"/>
                </div>
                <button onClick={handleDone} > done</button>
            </div>
        </div>
    )
}

export default CreateQues;