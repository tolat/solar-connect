import Button from "../UI/Buttons/Button"
import styles from "./Sidebar.module.css"


const Sidebar = (props) =>{
    return(
        <div className={styles.container}>
            <Button className={styles.iconButton} buttonText="Icon"/>
            <Button className={styles.iconButton} buttonText="Proj"/>
            <Button className={styles.iconButton} buttonText="Prod"/>
            <Button className={styles.iconButton} buttonText="Pack"/>
        </div>
    )
}

export default Sidebar