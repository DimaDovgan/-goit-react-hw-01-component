import React from 'react';
import styles from "./social-profil.module.css"
import PropTypes from "prop-types";
export const Profile = ({ username, tag, location, avatar, stats: {followers,views,likes }}) => {
    return <div className={styles.profile} >
  <div className="description">
    <img
      src={avatar}
      alt="User avatar"
      className={styles.avatar}
    />
            <p className="name">{ username}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className={styles.stats}>
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{likes}</span>
    </li>
  </ul>
</div>
    
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
  avatar: PropTypes.string,
};