import styles from "./ListCharacters.module.css";

export const ListCharacters = ({ characters }) => {
  const size = 300;

  const getStatus = (status) => {
    /**
     * This method return the class name for the badge based on the status
     */
    const list = [
      styles.badge,
      status === "Alive" ? styles.alive : styles.dead, // This is a ternary operator, acts as an if/else statement
    ];
    return list.join(" ");
  };

  return (
    <ul className={styles.listCharacters}>
      {characters.map((current, index) => (
        <li key={index} className={styles.card}>
          <h3 className={styles.title}>{current.name}</h3>
          <figure className={styles.figure}>
            <img
              width={size}
              height={size}
              loading="lazy"
              src={current.image}
              alt={current.name}
            />
          </figure>
          <span className={getStatus(current.status)}>{current.status}</span>
        </li>
      ))}
    </ul>
  );
};
