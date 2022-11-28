import styles from "/styles/Table.module.css";
import TableRow from "/components/TableRow.js";
import TableHead from "/components/TableHead.js";
import TableItem from "/components/TableItem";
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
  { text: "Team De Aprendizaje" },
  { text: "Proyecto Integrador 1" },
  { text: "2/30" },
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

async function constructInfo() {
  const URL = "http://localhost:3000/api/joinGroup";
  const data = {
    id: idA,
  };
  const myInit = {
    method: "POST",
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = await fetch(URL, myInit);
  const infoAct = await res.json();

  setInfoList((info = infoAct));
  console.log("info after query");
  console.log(info);
}

async function constructGroups() {
  console.log("Muestra Grupos");
  const URL = "http://localhost:3000/api/joinGroup";
  const data = {
    id: idA,
  };
  const myInit = {
    method: "POSTGROUPS",
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json",
    },
  };

  console.log("antes de hacer el query");
  const res = await fetch(URL, myInit);
  const infoAct = await res.json();
  console.log(infoAct);

  setParticipantsList((groups = infoAct));
  console.log("Groups after query");
  console.log(Groups);
}

function Table() {
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
