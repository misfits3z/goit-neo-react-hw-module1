import styles from "../FriendList/FriendList.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={styles.friendItem}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={isOnline ? styles.online : styles.offline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}