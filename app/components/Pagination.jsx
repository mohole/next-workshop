import Link from 'next/link'
import styles from "./Pagination.module.css";

export const Pagination = ({ next, prev }) => {
  const getPage = (url) => {
    const number = url && url.split("?page=")[1];
    return number ? `/page/${number}` : '#';
  };

  return (
    <section className={styles.pagination}>
      <Link className={styles.link} href={getPage(prev)}>&lt; Prev</Link>
      <span>---</span>
      <Link className={styles.link} href={getPage(next)}>Next &gt;</Link>
    </section>
  );
};
