import styles from "./Button.module.css"

const Button = (props) =>{
    return(
        <div className={styles.container}>
            <button className={styles.button}>
                {props.buttonText}
            </button>
        </div>
    )
}

export default Button