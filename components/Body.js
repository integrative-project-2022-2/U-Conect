import styles from "/styles/Body.module.css";
import Table from "/components/Table.js";

export default function Body() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.table_header}>
          <h2>Grupos De Estudio</h2>
          <div className={styles.input_search}>
            <input type="search" placeholder="Buscar Grupo" />
          </div>
        </div>
        <Table></Table>
      </div>
    </main>
  );
}
