import ContentContainer from "../components/ContentContainer";
import styles from "./SearchResults.module.css" 

function SearchResults(){
    return (
        <div className={styles.results}>
            <h1>SearchResults</h1>
            <ContentContainer />

        </div>
    )
}
export default SearchResults;