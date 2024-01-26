import styles from "./Footer.module.css";

export const Footer = () => {
  /**
   * This method get the current year in 4 digits
   */
  const year = new Date().getFullYear();

  return (
    <foooter className={styles.footer}>
      <p>Mohole {year}, made with fun 🎉, CSS 💅 and React ⚛️.</p>
    </foooter>
  );
};
