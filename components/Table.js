import styles from "../styles/Table.module.css";
import React from "react";
import TableRow  from "./TableRow.js";
import  TableHead  from "./TableHead.js";
import  TableItem  from "./TableItem";
import  TableFooter  from "./TableFooter";

import styles from "../styles/Table.module.css";
import React from "react";
import { TableRow } from "./TableRow.js";
import { TableHead } from "./TableHead.js";
import { TableItem } from "./TableItem";
import { TableFooter } from "./TableFooter";

// const get_group_Data = async () => {
//   const URL = '"http://localhost:3000/api/dbController.js"';
//   const data = {
//     id: "1",
//   };
//   const myInit = {
//     method: "GET",
//     body: JSON.stringify(data),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   const res = await fetch(URL, myInit);
//   const resJson = await res.json();
// };

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

// const rows2 = [
//   { text: "RepasitoMate" },
//   { text: "Matematicas" },
//   { text: "24/30" },
// ];

// const rows3 = [
//   { text: "LaTerceraEsLaVencida" },
//   { text: "Contabilidad" },
//   { text: "29/30" },
// ];

// const rows4 = [{ text: "AL" }, { text: "Algebra Lineal" }, { text: "13/30" }];

// const rows5 = [
//   { text: "F en el chat" },
//   { text: "Electromagnetismo" },
//   { text: "21/30" },
// ];

// const rows6 = [
//   { text: "Repasito" },
//   { text: "Estructuras Discretas" },
//   { text: "19/30" },
// ];

// const participantDB = get_group_Data();

function Table() {
  // const [rowsList, setRows] = React.useState(rows);
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

export { Table };

