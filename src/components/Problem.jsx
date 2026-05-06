import React from 'react';
import styles from './Problem.module.css';

const problems = [
  { icon: '📚', title: 'Baixo rendimento escolar',     desc: 'Notas abaixo do esperado mesmo com esforço, dificuldade em acompanhar o ritmo da turma.' },
  { icon: '🧠', title: 'Dificuldade de atenção e foco', desc: 'Desatenção frequente, agitação, dificuldade para concluir tarefas simples.' },
  { icon: '📝', title: 'Problemas com leitura e escrita', desc: 'Dificuldade para ler, escrever ou interpretar textos — possível dislexia ou disgrafia.' },
  { icon: '😢', title: 'Baixa autoestima e frustração',  desc: 'A criança se sente menos capaz que os colegas e começa a evitar a escola.' },
];

export default function Problem() {
  return (
    <section className={styles.section} id="dificuldades">
      <div className="reveal">
        <div className={styles.sectionTag}>— Você reconhece isso?</div>
        <h2 className={styles.sectionTitle}>
          Sua criança enfrenta <em>desafios</em> na escola?
        </h2>
        <p className={styles.sectionSub}>
          Dificuldades de aprendizagem são mais comuns do que se imagina — e têm solução com o suporte certo.
        </p>
      </div>

      <div className={styles.grid}>
        <div className={styles.cards}>
          {problems.map((p) => (
            <div key={p.title} className={`${styles.card} reveal`}>
              <div className={styles.icon}>{p.icon}</div>
              <div>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardDesc}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.ctaBox} reveal`}>
          <div className={styles.ctaHeart}>♥</div>
          <h3 className={styles.ctaTitle}>Eu posso ajudar sua criança!</h3>
          <p className={styles.ctaText}>
            Com um olhar clínico, sensível e individualizado, identifico as causas das
            dificuldades e desenvolvo estratégias que respeitam o tempo e o jeito único
            de cada criança aprender.
          </p>
          <a
            href="https://wa.me/5584998168816"
            target="_blank"
            rel="noreferrer"
            className={styles.ctaBtn}
          >
            💬 Falar agora
          </a>
        </div>
      </div>
    </section>
  );
}
