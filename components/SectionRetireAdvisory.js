import React from 'react';
import styles from '../styles/SectionRetireAdvisory.module.css'

function SectionRetireAdvisory(props) {
    return (
        <section className={styles.section}>
            {props.children}
        </section>
    );
}

export { SectionRetireAdvisory };