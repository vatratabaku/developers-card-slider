import styles from "./Card.module.css";

export default function Data({ username, lastName, pl, image, jobPosition, text}) {
  return (
    <div className={styles.card}>
      <img
        src={image}
        alt="null"
      ></img>
      <h4>{username} {lastName}</h4>
      <h5> {jobPosition}</h5>
      <p className={styles.pl}> {pl} </p>
      <p className={styles.text}>{text}</p>
      
    </div>
  );
}
