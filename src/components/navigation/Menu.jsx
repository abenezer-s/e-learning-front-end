import React, { useState } from 'react';
import styles from "./Menu.module.css";
import Search from "./Search";
import SideNavBar from './SideNavBar';

function Menu() {
    const [clicked, setClicked] = useState(false);
    const showSideNav = ()=> {
        if (!clicked){
            setClicked(true);
            console.log("clicked true");
        } else {
            setClicked(false);
            console.log("clicked false");
        }    
    }

    return (
        <div className={styles.menu}>
            <button onClick={showSideNav} className={styles.threeLines}>
                <img className={styles.threeLinesImg} src="/src/assets/img/menu2.png" alt="menu" height={30}/>
            </button>
        
        {clicked ? 
           
            <SideNavBar clicked={clicked} setClicked={setClicked} />
    
            : null 
        }  
        </div>
    );
  }
  
  export default Menu;
  