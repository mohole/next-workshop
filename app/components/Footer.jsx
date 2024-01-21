import styles from "./Footer.module.css";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <foooter className={styles.footer}>
      <p>Mohole {year}, made with fun 🎉, CSS 💅 and React ⚛️.</p>
    </foooter>
  )
}