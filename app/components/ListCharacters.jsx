
import styles from "./ListCharacters.module.css";

export const ListCharacters = ({ characters }) => {
  const size = 300;

  const getStatus = (status) => {
    const list = [styles.badge]
    status === 'Alive' ? list.push(styles.alive) : list.push(styles.dead)
    return list.join(' ')
  }

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
}