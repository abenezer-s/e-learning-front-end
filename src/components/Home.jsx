import styles from "./Home.module.css";
import Nav from "./navigation/Nav";
import Join from "./Join";
import PopularSection from "./PopularSection";
import Explore from "./Explore";
import CallForAction from "./CallForAction";
import Footer from "./Footer";
import SideNavBar from "./navigation/SideNavBar";
import NewSection from "./NewSection";
import { Outlet } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

function Home() {
    return (
        <div className={styles.Home}>
            <Nav />
            <SideNavBar />
            <Outlet />
            <Join />
            <PopularSection />
            <NewSection />
            <Explore />
            <CallForAction />
            <Footer />

        </div>
    );
  }
  
  export default Home;
