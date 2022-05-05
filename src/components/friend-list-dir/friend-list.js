import PropTypes from 'prop-types';
import React from 'react';
import style from './friend-list.module.css'
import { FriendListItem } from './friend-listItem';
import getRandomInt from "../compileid"
export const FriendList = ({ friends }) => {
    return (<ul className="friend-list">
      {friends.map((prop) => {
        return <FriendListItem friends={prop} key={getRandomInt()}/>
      }
        )}
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
