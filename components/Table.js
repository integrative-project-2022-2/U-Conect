import styles from "/styles/Table.module.css";
import TableRow from "/components/TableRow.js";
import TableHead from "/components/TableHead.js";
import TableItem from "/components/TableItem";
import React from "react";
import TableFooter from "/components/TableFooter";

const heads = [
  { text: "Grupo" },
  { text: "Materias" },
  { text: "Miembros" },
  { text: "Detalles de Grupo" },
  { text: "Unirse" },
];

const footers = [
  { text: "Total de Grupos" },
  { text: "1" },
  { text: "" },
  { text: "" },
  { text: "" },
];

const rows = [
  { text: "Los Juiciosos Pro" },
  { text: "Proyecto Integrador 1" },
  { text: "5/30" },
];

const rowsB = [{ text: "Detalles" }, { text: "Unirse" }];


export default function Table() {
  const [rowsList, setRows] = React.useState(rows);
  const UnirsePagina = () => {
    setRows(rows.splice(0, 3));
    setRows(rowsB.splice(0, 2));
    footers[1] = { text: "0" };
  };

  return (
    <table>
    <thead>
      <TableRow>
        {heads.map((head) => (
          <TableHead text={head.text}></TableHead>
        ))}
      </TableRow>
    </thead>
    <tbody className={styles.tbody}>
      <TableRow>
        {rows.map((row) => (
          <TableItem>
            <p>{row.text}</p>
          </TableItem>
        ))}
        {rowsB.map((row) => (
          <TableItem>
            <button className={styles.buttonJoin} onClick={UnirsePagina}>
              {row.text}
            </button>
          </TableItem>
        ))}
      </TableRow>
      {/* 2 */}
      {/* <TableRow>
        {rows2.map((row) => (
          <TableItem>
            <p>{row.text}</p>
          </TableItem>
        ))}
        {rowsB.map((row) => (
          <TableItem>
            <button>{row.text}</button>
          </TableItem>
        ))}
      </TableRow>
     
      <TableRow>
        {rows3.map((row) => (
          <TableItem>
            <p>{row.text}</p>
          </TableItem>
        ))}
        {rowsB.map((row) => (
          <TableItem>
            <button>{row.text}</button>
          </TableItem>
        ))}
      </TableRow>
      
      <TableRow>
        {rows4.map((row) => (
          <TableItem>
            <p>{row.text}</p>
          </TableItem>
        ))}
        {rowsB.map((row) => (
          <TableItem>
            <button>{row.text}</button>
          </TableItem>
        ))}
      </TableRow>
     
      <TableRow>
        {rows5.map((row) => (
          <TableItem>
            <p>{row.text}</p>
          </TableItem>
        ))}
        {rowsB.map((row) => (
          <TableItem>
            <button>{row.text}</button>
          </TableItem>
        ))}
      </TableRow>
      
      <TableRow>
        {rows6.map((row) => (
          <TableItem>
            <p>{row.text}</p>
          </TableItem>
        ))}
        {rowsB.map((row) => (
          <TableItem>
            <button>{row.text}</button>
          </TableItem>
        ))}
      </TableRow>    */}
    </tbody>
    <tfoot>
      <TableFooter>
        {footers.map((footer) => (
          <TableItem>
            <p>{footer.text}</p>
          </TableItem>
        ))}
      </TableFooter>
    </tfoot>
  </table>

  );
}