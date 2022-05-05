import PropTypes from 'prop-types';
import React from 'react';
import style from './friend-list.module.css'
export const FriendListItem = ({ friends: { id, isOnline, name, avatar } }) => {
    return <li className={style.item} key={id}>
                <span className={style.status} id={isOnline?style.true:style.false}> </span>
                <img className={style.avatar} src={avatar} alt={name} width="48" />
                <p className={style.name}>{name}</p>
            </li>
}
FriendListItem.propTypes = {
    friends: PropTypes.object.isRequired,
//   friends: PropTypes.objectOf(
//       PropTypes.shape({
//          avatar: PropTypes.object,
//       name: PropTypes.object,
//       isOnline: PropTypes.object,
//       id: PropTypes.object,
//      }
//     )
//   ),
};