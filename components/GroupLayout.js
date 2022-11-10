import React from 'react'
import styles from '../styles/profile.module.css'
import Link from 'next/link'

export default function GroupLayout({ children, button}) {
    return (
        <div>
            <header>
                <div className={styles.name}>
                    <div className={styles.content}>
                        <p className={styles.p - 1}>GRUPOS DE ESTUDIO</p>
                        <button onClick={button.fun[0]}>{button.name}</button>
                    </div>
                </div>
            </header>
            <main>
                {children}
            </main>
        </div>
    )
}