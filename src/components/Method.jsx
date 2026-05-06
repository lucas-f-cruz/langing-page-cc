import React from 'react';
import styles from './Method.module.css';

const steps = [
  { num: '01', icon: '🤲', title: 'Acolher',     desc: 'Escuta individualizada e um ambiente seguro onde a criança se sente à vontade para ser quem é, sem julgamentos.' },
  { num: '02', icon: '📖', title: 'Compreender', desc: 'Avaliação psicopedagógica para entender as causas profundas das dificuldades e o perfil de aprendizagem da criança.' },
  { num: '03', icon: '🌱', title: 'Desenvolver', desc: 'Estratégias práticas e personalizadas que estimulam o aprendizado, a autonomia e o potencial de cada criança.' },
];

export default function Method() {
  return (
    <section className={styles.section} id="metodo">
      <div className={`${styles.header} reveal`}>
        <div className={styles.sectionTag}>— Meu método</div>
        <h2 className={styles.sectionTitle}>
          Acolher, <em>compreender</em> e desenvolver
        </h2>
        <p className={styles.sectionSub}>
          Cada atendimento é único, respeitando o tempo, o jeito e o potencial de cada criança.
        </p>
      </div>

      <div className={styles.steps}>
        {steps.map((s) => (
          <div key={s.num} className={`${styles.step} reveal`}>
            <div className={styles.stepNum}>{s.num}</div>
            <div className={styles.stepIcon}>{s.icon}</div>
            <h3 className={styles.stepTitle}>{s.title}</h3>
            <p className={styles.stepDesc}>{s.desc}</p>
          </div>
        ))}
      </div>

      <div className={`${styles.quote} reveal`}>
        <p>
          ♥&nbsp;&nbsp;"Cada criança tem seu tempo, seu jeito e{' '}
          <strong>seu potencial.</strong>"
        </p>
      </div>
    </section>
  );
}
