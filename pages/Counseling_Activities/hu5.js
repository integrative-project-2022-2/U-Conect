import React from "react";
import Head from "/components/Head.js";
import Header from "/components/Header.js";
import Body from "/components/Body.js";
import styles from "../../styles/TableBody.module.css"

export default function Hu5() {
  return (
    <div className={styles.body_table_history}>
      {/* <Head />
      <Header /> */}
      <Body />
    </div>
  );
}