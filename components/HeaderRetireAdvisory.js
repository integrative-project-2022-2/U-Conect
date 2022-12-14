import styles from '/styles/HeaderRetireAdvisory.module.css';
import profilePhoto from '/public/image/pp.png'
import Image from 'next/image'

let username = "pipocast";
let user_code = "A00382775";

export default function HeaderRetireAdvisory(){
    return(
        <header className={styles.header}>
            <section className={styles.button_volver_section}>
                <input type="button" className={styles.volver_button} value="VOLVER"/>
            </section>
            <section className={styles.profile_content_section}>
                <section className={styles.nombre_codigo_section}>
                    <section className={styles.nombre_section}>
                        <p className={styles.nombre_paragraph}>{username}</p>
                    </section>
                    <section className={styles.codigo_section}>
                        <p className={styles.codigo_paragraph}>{user_code}</p>
                    </section>
                </section>
                <section className={styles.profile_photo_section}>
                    <Image src={profilePhoto} alt="profile photo"/>
                </section>
            </section>
        </header>
    );
}