import styles from "./ContactCard.module.scss";

export const ContactCard: React.FC<{ children: any }> = ({ children }) => {
  return (
    <article className={styles.Card}>
      <section className={styles.Image}></section>
      {children}
    </article>
  );
};
