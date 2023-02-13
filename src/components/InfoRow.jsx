import styles from "./InfoRow.module.css";

function InfoRow({ title, children }) {
  return (
    <div className={styles.row}>
      <b>{title}:</b>
      {children}
    </div>
  );
}

export default InfoRow;
