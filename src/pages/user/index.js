import React from 'react';
import { useParams } from 'react-router-dom'
import { UserContainer } from "../../containers/UserContainer";

export const UserPage = () => {
  const { id } = useParams()

  return (
    <UserContainer userId={id} />
  )
}
