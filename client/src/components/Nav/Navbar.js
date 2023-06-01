import styles from "./Navbar.module.css"

const Navbar = (props) =>{
    return(
        <div className={styles.container}>
            <div className={styles.navItem}>Account</div>
            <div className={styles.navItem}>Help</div>
        </div>

    )
}

export default Navbar