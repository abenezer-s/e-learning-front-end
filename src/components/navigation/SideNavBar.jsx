import styles from "./SideNavBar.module.css";
import ExploreButton from "./ExploreButton";
import LoginPrompt from "./LoginPrompt";
function SideNavBar({clicked, setClicked}) {
    
    const closeSideNav = () => {
        setClicked(false);
    }
    return (  
        <div id="side-nav" className={ clicked ? styles.showSideNav : null}>
            { clicked ? 
            <>
                <button onClick={closeSideNav} className={styles.close}> 
                    <img src="/src/assets/img/close-circle-svgrepo-com.png" alt="close" width={40} />
                </button>
                <ExploreButton />
                <div className={styles.footer}>
                    <LoginPrompt />
                </div>
                
            </>
                :
                null
            }

        </div>
    );
  }
  
  export default SideNavBar;