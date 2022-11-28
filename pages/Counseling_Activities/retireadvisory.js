import React from "react";
import HeaderRetireAdvisory from "/components/HeaderRetireAdvisory";
import BodyRetireAdvisory from "/components/BodyRetireAdvisory";
import styles from "/styles/RetireAdvisory.module.css";

export default function RetireAdvisory(){
    return (
        <div className={styles.body_retire_advisory}>
            <HeaderRetireAdvisory />
            <BodyRetireAdvisory />
        </div>
    );
}