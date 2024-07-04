"use client";
import { useState } from "react";
import styles from "./ContactForm.module.css";
import Image from "next/image";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sub, setSub] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    setSub(true);
    e.preventDefault();
    if (name && email && message) {
      setSubmitted(true);
      setSub(false);
      setName("");
      setEmail("");
      setMessage("");
    }
  };
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    if (id === "name") {
      setName(value);
    } else if (id === "email") {
      setEmail(value);
    } else {
      setMessage(value);
    }
  };
  return (
    <section className={styles.contact}>
      <h2 className={styles.title}>Contacto</h2>
      <Image
        className={styles.reload}
        src="/reloadIcon.svg"
        alt="contact"
        width={20}
        height={20}
        hidden={!submitted}
        onClick={() => setSubmitted(false)}
      />
      {submitted ? (
        <p className={styles.successMessage}>¡Mensaje enviado con éxito!</p>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <input
              id="name"
              type="text"
              value={name}
              onChange={handleChange}
              className={styles.formInput}
              style={{
                border:
                  sub && !name ? "1px solid #640e0e" : "1px solid transparent",
              }}
              autoComplete="off"
            />
            <label
              htmlFor="name"
              className={`${styles.label} ${name.length > 0 && styles.goUp}`}
            >
              Nombre
            </label>
          </div>
          <div className={styles.formGroup}>
            <input
              id="email"
              type="email"
              value={email}
              onChange={handleChange}
              className={styles.formInput}
              style={{
                border:
                  sub && !email ? "1px solid #640e0e" : "1px solid transparent",
              }}
              autoComplete="off"
            />
            <label
              htmlFor="email"
              className={`${styles.label} ${email.length > 0 && styles.goUp}`}
            >
              Correo
            </label>
          </div>
          <div className={styles.formGroup}>
            <textarea
              id="messagse"
              value={message}
              onChange={handleChange}
              className={styles.formTextarea}
              style={{
                border:
                  sub && !message
                    ? "1px solid #640e0e"
                    : "1px solid transparent",
              }}
              autoComplete="off"
            />
            <label
              htmlFor="message"
              className={`${styles.label} ${message.length > 0 && styles.goUp}`}
            >
              Mensaje
            </label>
          </div>
          <button type="submit" className={styles.submitButton}>
            Enviar
          </button>
        </form>
      )}
    </section>
  );
};

export default ContactForm;
