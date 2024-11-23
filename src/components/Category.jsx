import styles from "./Category.module.css"
function Category({ category }) {
    return (
    <div className={styles.category}>
        <div className={styles.icon}>
            <img src="" alt="icon" />
        </div>
        <div className={styles.categoryName}>
            <button className={styles.categoryButton}>
                {category}
            </button>
        </div>

    </div>
    );
}

export default Category;