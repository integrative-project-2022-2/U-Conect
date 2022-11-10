import React from 'react';
import styles from '/styles/SectionRetireAdvisory.module.css'

export default function SectionRetireAdvisory(props) {
    return (
        <section className={styles.section}>
            {props.children}
        </section>
    );
}