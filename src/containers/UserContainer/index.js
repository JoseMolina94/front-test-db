import React, { useState, useEffect } from 'react';
import { Input } from "../../components/Commons/Input";
import { useGetUserById } from "../../hooks/useGetUserById";

export const UserContainer = ({ userId = '' }) => {
  const {
    user,
    loadingUser
  } = useGetUserById(userId)
  const [formState, setFormState] = useState({})

  console.log('USER', user, formState)

  useEffect(() => {
    if (user?.id) {
      setFormState(user)
    }
  }, [user?.id])

  return (
    <form>
      <div>
        <Input
          name="name"
          value={formState?.name}
        />
      </div>
    </form>
  )
}
