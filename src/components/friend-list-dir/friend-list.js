import React from 'react';
import style from './friend-list.module.css'
import PropTypes from "prop-types";
export const FriendList = ({ friends }) => {
    return (<ul className="friend-list">
        {friends.map(friend => {
            return <li className={style.item} key={friend.id}>
                <span className={style.status} id={friend.isOnline?style.true:style.false}> </span>
                <img className={style.avatar} src={friend.avatar} alt={friend.name} width="48" />
                <p className={style.name}>{friend.name}</p>
            </li>
        })}
    </ul>)
}
FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
