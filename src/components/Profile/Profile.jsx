import css from "./Profile.module.css"

export default function Profile({name, tag, location, image,stats}) {
    return (
<div className={css.wrap}>
  <div className={css.profile}>
    <img className={css.image}
      src={image}
      alt="User avatar"
    />
    <p className={css.name}>{name}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.imageText}>{location}</p>
  </div>

  <ul className={css.list}>
    <li className={css.item}>
      <span className={css.spanTitle}>Followers</span>
      <span className={css.spanValue}>{stats.followers}</span>
    </li>
    <li className={css.item}>
      <span className={css.spanTitle}>Views</span>
      <span className={css.spanValue}>{stats.views}</span>
    </li>
    <li className={css.item}>
      <span className={css.spanTitle}>Likes</span>
      <span className={css.spanValue}>{stats.likes}</span>
    </li>
  </ul>
</div>
    )
}
