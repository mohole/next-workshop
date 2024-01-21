import Link from 'next/link'
import styles from "./Pagination.module.css";

export const Pagination = ({ next, prev }) => {
  const getPage = (url) => {
    const number = url.split("?page=")[1];
    return `/page/${number}`;
  };

  return (
    <section className={styles.pagination}>
      <Link className={styles.link} href={prev ? getPage(prev) : undefined}>&lt; Prev</Link>
      <span>---</span>
      <Link className={styles.link} href={next ? getPage(next) : undefined}>Next &gt;</Link>
    </section>
  );
};
