import React, { useState } from 'react';
import styles from './Contact.module.css';

const INFO = [
  { icon: '📱', label: 'WhatsApp',     value: '(84) 99816-8816' },
  { icon: '📍', label: 'Endereço',     value: 'Espaço Acolher — Rua Dr. Manoel Varela, 416 · Centro · Ceará-Mirim/RN' },
  { icon: '📅', label: 'Atendimentos', value: 'Com hora marcada · Agenda aberta' },
  { icon: '📸', label: 'Instagram',    value: '@carlacarolinemelo' },
];

export default function Contact() {
  const [form, setForm] = useState({ nome: '', telefone: '', idade: '', mensagem: '' });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    const msg = encodeURIComponent(
      `Olá, Carla! Me chamo *${form.nome}*.\n` +
      `📞 ${form.telefone}\n` +
      `👦 Criança com ${form.idade}\n\n` +
      form.mensagem
    );
    window.open(`https://wa.me/5584998168816?text=${msg}`, '_blank');
  };

  return (
    <section className={styles.section} id="contato">
      <div className="reveal">
        <div className={styles.sectionTag}>— Contato</div>
        <h2 className={styles.sectionTitle}>
          Agende sua <em>consulta</em>
        </h2>
        <p className={styles.sectionSub}>
          Entre em contato e vamos juntas encontrar o melhor caminho para a sua criança.
        </p>
      </div>

      <div className={styles.grid}>
        {/* Info */}
        <div className={`${styles.info} reveal`}>
          {INFO.map((i) => (
            <div key={i.label} className={styles.infoItem}>
              <div className={styles.infoIcon}>{i.icon}</div>
              <div>
                <div className={styles.infoLabel}>{i.label}</div>
                <div className={styles.infoValue}>{i.value}</div>
              </div>
            </div>
          ))}
          <a
            href="https://wa.me/5584998168816"
            target="_blank"
            rel="noreferrer"
            className={styles.btnPrimary}
          >
            💬 Chamar no WhatsApp
          </a>
        </div>

        {/* Form */}
        <div className={`${styles.form} reveal`}>
          <h3 className={styles.formTitle}>Mande uma mensagem</h3>

          {[
            { name: 'nome',      label: 'Seu nome',                  placeholder: 'Nome completo',           type: 'text' },
            { name: 'telefone',  label: 'Telefone / WhatsApp',       placeholder: '(84) 9 0000-0000',        type: 'tel' },
            { name: 'idade',     label: 'Idade da criança',          placeholder: 'Ex: 8 anos',              type: 'text' },
          ].map((f) => (
            <div key={f.name} className={styles.formGroup}>
              <label className={styles.label}>{f.label}</label>
              <input
                type={f.type}
                name={f.name}
                placeholder={f.placeholder}
                value={form[f.name]}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
          ))}

          <div className={styles.formGroup}>
            <label className={styles.label}>Conte-nos sobre as dificuldades</label>
            <textarea
              name="mensagem"
              placeholder="Descreva brevemente o que você observa..."
              value={form.mensagem}
              onChange={handleChange}
              className={styles.textarea}
            />
          </div>

          <button onClick={handleSubmit} className={styles.submit}>
            Enviar mensagem ♥
          </button>
        </div>
      </div>
    </section>
  );
}
