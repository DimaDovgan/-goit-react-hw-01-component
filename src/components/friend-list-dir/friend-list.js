import PropTypes from 'prop-types';
import React from 'react';
import style from './friend-list.module.css'
export const FriendList = ({friends}) => {
    return (<ul className="friend-list">
        {friends.map(({id,isOnline,name,avatar})=> {
            return <li className={style.item} key={id}>
                <span className={style.status} id={isOnline?style.true:style.false}> </span>
                <img className={style.avatar} src={avatar} alt={name} width="48" />
                <p className={style.name}>{name}</p>
            </li>
        })}
    </ul>)
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};
