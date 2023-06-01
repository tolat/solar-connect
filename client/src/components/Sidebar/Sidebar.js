import styles from "./Sidebar.module.css"

const Sidebar = (props) =>{
    return(
        <div className={styles.container}>
            <div className={styles.icon}>Icon</div>
            <div className={styles.icon}>Proj</div>
            <div className={styles.icon}>Prod</div>
            <div className={styles.icon}>Pack</div>
        </div>
    )
}

export default Sidebar