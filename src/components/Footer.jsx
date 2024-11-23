import styles from './Footer.module.css'
function Footer() {
    return (
        <div className={styles.footer}>
            <div>
                <h2>learena</h2>
                <li>about</li>
                <li>programs</li>
                <li>courses</li>
            </div>
            <div>
                <h2>popular programs</h2>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </div>
            <div>
                <h2>popular courses</h2>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </div>
        
        </div>
    );
  }
  
  export default Footer;