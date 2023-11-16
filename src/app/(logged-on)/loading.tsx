import styles from '@styles/LoadingIcon/LoadingIcon.module.scss';

export default function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles.loading__container}></div>
    </div>
  );
}
