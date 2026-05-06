import React from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    text: 'Minha filha tinha muita dificuldade na leitura e estava cada vez mais frustrada. Depois do acompanhamento com a Carla, ela já lê com mais confiança e entusiasmo!',
    name: 'Mãe da Ana Luíza, 8 anos',
    role: 'Paciente desde 2023',
    avatar: '👩',
  },
  {
    text: 'A Carla é muito atenciosa e paciente. Meu filho foi diagnosticado com dislexia e ela soube trabalhar de um jeito que ele não percebe que está se esforçando — ele adorou!',
    name: 'Mãe do Pedro, 10 anos',
    role: 'Paciente desde 2024',
    avatar: '👩',
  },
  {
    text: 'O espaço é lindo e acolhedor. Em poucos meses meu filho já melhorou muito nas notas e, o mais importante, voltou a gostar de estudar.',
    name: 'Pai do Mateus, 9 anos',
    role: 'Paciente desde 2024',
    avatar: '👨',
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section} id="depoimentos">
      <div className={`${styles.header} reveal`}>
        <div className={styles.sectionTag}>— Depoimentos</div>
        <h2 className={styles.sectionTitle}>
          O que as <em>famílias</em> dizem
        </h2>
      </div>

      <div className={styles.grid}>
        {testimonials.map((t) => (
          <div key={t.name} className={`${styles.card} reveal`}>
            <span className={styles.quoteMark}>"</span>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.text}>{t.text}</p>
            <div className={styles.author}>
              <div className={styles.avatar}>{t.avatar}</div>
              <div>
                <div className={styles.name}>{t.name}</div>
                <div className={styles.role}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
