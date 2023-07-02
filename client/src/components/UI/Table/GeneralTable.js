import styles from "./GeneralTable.module.css";

const GeneralTable = (props) => {
  return (
    <div className={styles.container}>
      <table>
        <thead style={props.headerStyle}>
          <tr>
            {props.headers.map(h => {
              return (
                <th key={Math.random()*1000}>{h}</th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GeneralTable;
