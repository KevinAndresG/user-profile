import styles from "./Interests.module.css";

const Interests = () => {
  const interests = [
    "Viajes",
    "Deportes",
    "Fotografía",
    "Música",
    "Lectura",
    "Cocina",
    "Arte y Diseño",
    "Programación",
    "Videojuegos",
    "Cine y Series",
  ];
  return (
    <section className={styles.interests}>
      <h2 className={styles.title}>Intereses</h2>
      <ul className={styles.list}>
        {interests.map((interest) => (
          <li className={styles.listItem} key={interest}>
            {interest}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Interests;
