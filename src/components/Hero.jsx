import React from 'react';
import { IMG_HERO } from '../assets/images';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background orbs */}
      <div className={styles.orbA} />
      <div className={styles.orbB} />

      {/* Left — copy */}
      <div className={styles.copy}>
        <div className={styles.tag}>
          <span>♥</span> Psicopedagoga Clínica
        </div>

        <h1 className={styles.headline}>
          Sua criança pode{' '}
          <em>aprender com alegria</em>{' '}
          e potencial.
        </h1>

        <p className={styles.sub}>
          Atendimento especializado para crianças que enfrentam dificuldades
          de aprendizagem — com escuta, acolhimento e estratégias individualizadas.
        </p>

        <div className={styles.actions}>
          <a
            href="https://wa.me/5584998168816"
            target="_blank"
            rel="noreferrer"
            className={styles.btnPrimary}
          >
            📲 Agendar no WhatsApp
          </a>
          <a href="#sobre" className={styles.btnSecondary}>
            Saiba mais
          </a>
        </div>
      </div>

      {/* Right — card */}
      <div className={styles.visual}>
        <div className={styles.card}>
          <span className={styles.cardHeart}>♥</span>
          <div className={styles.avatarRing}>
            <img src={IMG_HERO} alt="Carla Caroline" className={styles.avatar} />
          </div>
          <h2 className={styles.cardName}>Carla Caroline</h2>
          <p className={styles.cardRole}>Psicopedagoga Clínica · Ceará-Mirim/RN</p>
          <div className={styles.stats}>
            {[
              { num: '+5',  label: 'Anos de experiência' },
              { num: '♥',  label: 'Atendimento acolhedor' },
              { num: '📍', label: 'Espaço Acolher' },
              { num: '🌱', label: 'Agenda aberta' },
            ].map((s) => (
              <div key={s.label} className={styles.stat}>
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.leaf}>🌿</div>
      </div>
    </section>
  );
}
