import FriendListItem from "./FriendListItem"
import css from "../FriendList/FriendList.module.css";


export default function FriendList({ friends }) {
  return (
    <ul className={css.friends}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className={css.item}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
}