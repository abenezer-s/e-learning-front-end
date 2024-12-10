import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Search.module.css";
function Search({srcPath, from }) {
    const blackSrcPath = "/src/assets/img/searchBlack.png";
    let [state, setState] = useState({
        input:"",
        showInputMobile: (from == "results") ? true: false,
        desktop: (srcPath == blackSrcPath ? false : true),
        imgSize: ((srcPath !== blackSrcPath ? 15 : 25))
        })
    {console.log(`showInputMobile ${state.showInputMobile}`)}
    const handleInput = (event)=>{
        {console.log("Inisde handleInput input:", state.input)};

        setState( prevState => ({
                ...prevState,
                input: event.target.value
                })
            );
        {console.log("Inisde handleInput state change:", state.input)};
    }

    {console.log("OUTSIDE comp INPUT", state.input)};
    const navigate = useNavigate();
    const handleSearchButton = ()=>{
        console.log("SEARCH CLICKED")
        if(state.desktop){
            navigate("/search", {state : {  state }});
        }
        else{    
            setState( prevState => ({
                ...prevState,
                showInputMobile: true
                }));   
            navigate("/search", {state : { state }});
        }
    }
    const handleKeyDown = (event)=>{
         (event.key === "Enter" ? 
            navigate("/search", {state : { state }}) :
            null)
    }
    return (  
        <div  className={state.desktop ?  
                        styles.searchDesktop :
                        state.showInputMobile ? 
                        styles.mobileSearchResults
                        : 
                        styles.searchMobile}>

            {console.log("inside comoponet desktop:", state.desktop)}
            {console.log("width", state.imgSize)}
            <input onKeyDown={handleKeyDown} onChange={handleInput} 
                className={!(state.showInputMobile) ? styles.searchInput : styles.searchResInput } 
                type="text" placeholder="what do you want to learn?" />
            <button onClick={handleSearchButton} className={ !(state.showInputMobile) ? 
                    styles.searchButton :
                    styles.searchResButton}>                

                <img src={srcPath} alt="search img" width={state.imgSize}/>
            </button>
        </div>
    );
  }
  
  export default Search;