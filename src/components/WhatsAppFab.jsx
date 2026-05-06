import React from 'react';
import styles from './WhatsAppFab.module.css';

export default function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/5584998168816"
      target="_blank"
      rel="noreferrer"
      className={styles.fab}
      aria-label="Fale comigo no WhatsApp"
    >
      💬
    </a>
  );
}
