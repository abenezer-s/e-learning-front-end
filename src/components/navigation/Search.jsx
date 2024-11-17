import { useState } from "react";
import styles from "./Search.module.css";
function Search({srcPath}) {
    const blackSrcPath = "/src/assets/img/searchBlack.png";
    let desktop = true;
    let imgSize = 25;
    {(srcPath !== blackSrcPath) ? (()=>{
        desktop = false;
        imgSize = 15;
        })() :
    null}
        console.log("img size:", imgSize);
    return (  
        <div className={desktop ? (styles.mobile) : styles.desktop}>

            <input className={styles.searchInput} type="text" placeholder="what do you want to learn?" />
            <button className={styles.searchButton}>                
                <img src={srcPath} alt="search img" width={imgSize}/>
            </button>
        </div>
    );
  }
  
  export default Search;