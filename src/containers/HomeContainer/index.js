import React from 'react'
import { useGetUsers } from "../../hooks/useGetUsers";
import { UsersGridList } from "../../components/UsersGridList";

export const HomeContainer = () => {

  const {
    usersList,
    loadingUsersList,
    setUsersList
  } = useGetUsers()

  console.log('FFF', usersList)

  return (
    <div>
      <UsersGridList
        usersList={usersList}
        loading={loadingUsersList}
        setUsersList={setUsersList}
      />
    </div>
  )
}
