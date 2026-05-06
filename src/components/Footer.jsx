import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.logo}>Carla Caroline</span>
      <p className={styles.center}>Psicopedagoga Clínica · Ceará-Mirim/RN</p>
      <p className={styles.right}>
        Feito com <span className={styles.heart}>♥</span> para cada criança
      </p>
    </footer>
  );
}
