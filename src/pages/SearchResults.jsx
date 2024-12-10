import ContentContainer from "../components/ContentContainer";
import Search from "../components/navigation/Search";
import styles from "./SearchResults.module.css";
import { useLocation } from 'react-router-dom';

function SearchResults(){
    const location = useLocation();
    let input =  location.state?.state.input;
    {console.log("Inisde SearchResults input:", input)};
    return (
        <div className={styles.results}>
            <h1>SearchResults for {input}</h1>
            <div className={styles.head}>
                <Search srcPath="/src/assets/img/searchBlack.png" from="results"/>
            </div>
            
            <ContentContainer />

        </div>
    )
}
export default SearchResults;