import styles from "./NavBar.module.css";
import Search from "./Search";
import ExploreButton from "./ExploreButton";
import LoginPrompt from "./LoginPrompt";
function NavBar() {
  const srcPath = "/src/assets/img/newSearchWhite.png"
    return (
        <div className={styles.navBar}>
          <ExploreButton />
          <Search srcPath={srcPath}/>
          <LoginPrompt />
        </div>
    );
  }
  
  export default NavBar;
  