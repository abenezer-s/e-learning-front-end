import styles from "./Home.module.css";
import Nav from "./navigation/Nav";
import Join from "./Join";
import PopularSection from "./PopularSection";
import Explore from "./Explore";
import CallForAction from "./CallForAction";
import Footer from "./Footer";
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
          <CallForAction />
          <Footer />

        </div>
    );
  }
  
  export default Home;
  
  // https://www.freepik.com/free-vector/hand-drawn-black-teacher-clipart-illustration_78537602.htm#fromView=keyword&page=8&position=25&uuid=7222c737-6010-4d83-823a-79aa59fe19dc
  // https://www.freepik.com/free-photo/smiling-confident-man-with-book-library_1249614.htm#fromView=keyword&page=7&position=4&uuid=7222c737-6010-4d83-823a-79aa59fe19dc