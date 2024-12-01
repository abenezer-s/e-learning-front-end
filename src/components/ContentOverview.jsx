import styles from "./ContentOverview.module.css"
import Footer from "./Footer";
import Nav from "./navigation/Nav";
function ContentOverview({content}) {
    let message = "program";
    return (
        <div className={styles.contentOverview}>
            <Nav />
            {content === "course" ? message= "course": null}
            <h1>{message}</h1>
            <div className={styles.providerLogo}> logo</div>
            <div className={styles.description}> description</div>
            <div className={styles.enrollButton}> enrollButton 
                <button>enroll</button>
            </div>
            <div className={styles.about}> about </div>
            <div className={styles.contentList}> contentList </div>
            <Footer />

        </div>
    )
}

export default ContentOverview;