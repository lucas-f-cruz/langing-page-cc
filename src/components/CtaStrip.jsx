import React from 'react';
import styles from './CtaStrip.module.css';

export default function CtaStrip() {
  return (
    <div className={`${styles.strip} reveal`}>
      <h2 className={styles.title}>
        Pronta para ajudar sua criança a <em>florescer</em>?
      </h2>
      <a
        href="https://wa.me/5584998168816"
        target="_blank"
        rel="noreferrer"
        className={styles.btn}
      >
        📲 Agendar agora
      </a>
    </div>
  );
}
