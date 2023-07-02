import styles from "./Navbar.module.css"
import Button from "../UI/Buttons/Button"

const Navbar = (props) =>{
    return(
        <div className={styles.container}>
            <Button buttonText="Account"/>
            <Button buttonText="Help"/>
            
        </div>

    )
}

export default Navbar