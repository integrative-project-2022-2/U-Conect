import React from "react";
import { HeaderRetireAdvisory } from "../components/HeaderRetireAdvisory.js";
import { BodyRetireAdvisory } from "../components/BodyRetireAdvisory.js";
import styles from "../styles/RetireAdvisory.module.css";

export default function RetireAdvisory(){
    return (
        <div className={styles.body}>
            <HeaderRetireAdvisory />
            <BodyRetireAdvisory />
        </div>
    );
}