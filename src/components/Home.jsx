import styles from "./Home.module.css";
import Nav from "./navigation/Nav";
import Menu from "./navigation/Menu";
import Join from "./Join";
import Roles from "./Roles";
import Popular from "./Popular";
import New from "./New";
import Explore from "./Explore";
import Outcomes from "./Outcomes";
import Testimonials from "./Testimonials";
import CallForAction from "./CallForAction";
import Footer from "./navigation/Footer";
import SideNavBar from "./navigation/SideNavBar";

function Home() {
    return (
        <div className={styles.Home}>
          <Nav />
          <SideNavBar />
          <Join />
          <Roles />
          <Popular />
          <New />
          <Explore />
          <Outcomes />
          <Testimonials />
          <CallForAction />
          <Footer />

        </div>
    );
  }
  
  export default Home;
  