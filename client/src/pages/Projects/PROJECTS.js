import styles from "./PROJECTS.module.css"
import GeneralTable from "../../components/UI/Table/GeneralTable"

const PROJECTS = (props) =>{
    return(
        <div className={styles.container}>
            <div className={styles.header}>Projects</div>
            <GeneralTable headers={[<div style={{color: "blue"}}>TEST DIV</div>, "New", "Get"]}/>
        </div>
    )
}

export default PROJECTS