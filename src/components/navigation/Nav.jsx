import Menu from "./Menu";
import styles from "./Nav.module.css";
import NavBar from "./NavBar";
import Logo  from "./Logo";
import Search from "./Search";

function Nav() {
    const srcPath = "/src/assets/img/searchBlack.png";
    return (
        <div className={styles.nav}>
         <NavBar />
         <Menu />
         <Logo />
         <Search srcPath={srcPath}/>
        </div>
    );
  }
  
  export default Nav;
  