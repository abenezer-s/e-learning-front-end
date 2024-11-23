import styles from "./Home.module.css";
import Nav from "./navigation/Nav";
import Join from "./Join";
import PopularSection from "./PopularSection";
import Explore from "./Explore";
import Outcomes from "./Outcomes";
import Testimonials from "./Testimonials";
import CallForAction from "./CallForAction";
import Footer from "./navigation/Footer";
import SideNavBar from "./navigation/SideNavBar";
import NewSection from "./NewSection";

function Home() {
    return (
        <div className={styles.Home}>
          <Nav />
          <SideNavBar />
          <Join />
          <PopularSection />
          <NewSection />
          <Explore />
          <Outcomes />
          <Testimonials />
          <CallForAction />
          <Footer />

        </div>
    );
  }
  
  export default Home;
  