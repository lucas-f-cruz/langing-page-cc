import React from 'react';
import { IMG_ABOUT } from '../assets/images';
import styles from './About.module.css';

const credentials = [
  'Psicopedagoga Clínica com formação especializada',
  'Atendimento no Espaço Acolher — Ceará-Mirim/RN',
  'Avaliação e intervenção psicopedagógica',
  'Atendimentos com hora marcada e agenda flexível',
  'Parceria com família e escola para melhores resultados',
];

export default function About() {
  return (
    <section className={styles.section} id="sobre">
      <div className={styles.grid}>
        {/* Photo */}
        <div className={`${styles.photoWrap} reveal`}>
          <img
            src={IMG_ABOUT}
            alt="Carla Caroline no Espaço Acolher"
            className={styles.photo}
          />
          <div className={styles.badge}>
            <span className={styles.dot} />
            Agenda aberta · (84) 99816-8816
          </div>
        </div>

        {/* Text */}
        <div className={`${styles.text} reveal`}>
          <div className={styles.sectionTag}>— Sobre mim</div>
          <h2 className={styles.sectionTitle}>
            Um novo <em>começo</em> para sua criança
          </h2>
          <p className={styles.sectionSub}>
            Sou Carla Caroline, Psicopedagoga Clínica especializada no atendimento de
            crianças que enfrentam desafios na aprendizagem. Ofereço um espaço acolhedor
            onde cada criança é vista como única.
          </p>

          <blockquote className={styles.quote}>
            "Acredito que toda criança tem capacidade de aprender — às vezes só precisamos
            encontrar o caminho certo juntos."
          </blockquote>

          <ul className={styles.creds}>
            {credentials.map((c) => (
              <li key={c} className={styles.cred}>{c}</li>
            ))}
          </ul>

          <a
            href="https://wa.me/5584998168816"
            target="_blank"
            rel="noreferrer"
            className={styles.btn}
          >
            📲 Agendar consulta
          </a>
        </div>
      </div>
    </section>
  );
}
