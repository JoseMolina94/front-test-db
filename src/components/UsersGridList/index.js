import React from 'react'
import { UserCard } from "../UserCard";
import { useUsersCRUD } from "../../hooks/useUsersCRUD";

import './styles.css'

export const UsersGridList = (props) => {
  const {
    usersList = [],
    setUsersList
  } = props
  const {
    deleteUser
  } = useUsersCRUD()

  const deleteUserFunc = (userId) => {
    const response = deleteUser({
      userId,
      list: usersList
    })

    setUsersList(response)
  }

  return (
    <div className="users-grid-list">
      {
        usersList.map((user, index) => (
          <UserCard
            {...user}
            key={index}
            deleteUserFunc={deleteUserFunc}
          />
        ))
      }
    </div>
  )
}
