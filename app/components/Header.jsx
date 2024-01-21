import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title}>Rick & Morty</h1>
        <small>catalogo personaggi</small>
      </header>
    </div>
  );
};
