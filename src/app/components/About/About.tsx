import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.about}>
      <h2 className={styles.title}>Sobre mí</h2>
      <p className={styles.description}>
        Soy un desarrollador frontend apasionado por la creación de aplicaciones
        web dinámicas y responsivas.
      </p>
      <p className={styles.description}>
        Mi enfoque principal está en brindar experiencias de usuario
        excepcionales mediante el uso de tecnologías modernas y prácticas de
        desarrollo eficientes.
      </p>
      <p className={styles.description}>
        Mi meta es siempre superar las expectativas del cliente, combinando
        habilidades técnicas con una visión creativa.
      </p>
      <p className={styles.description}>
        Habilidades Técnicas: Lenguajes de Programación: JavaScript (ES6+),
        HTML5, CSS3 Frameworks y Librerías: React, Next.js, Angular Herramientas
        de Construcción: Webpack, Vite, Farm Estilos y Diseño: SASS, LESS,
        Bootstrap, Material-UI, Tailwind CSS Versionado: Git, GitHub, GitLab
        Testing: Jest, React Testing Library Metodologías de Trabajo: Agile,
        Scrum, Kanban
      </p>
    </section>
  );
};

export default About;
