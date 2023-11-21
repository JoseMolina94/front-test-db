import React, { useState, useEffect } from 'react';
import { Input } from "../../components/Commons/Input";
import { useGetUserById } from "../../hooks/useGetUserById";

export const UserContainer = ({ userId = '' }) => {
  const {
    user,
    loadingUser
  } = useGetUserById(userId)
  const [formState, setFormState] = useState({})

  const onChangeFunc = ({name, value}) => {
    console.log('III', value)
    let currentValues = formState
    currentValues[name] = value

    setFormState({...currentValues})
  }

  console.log('USER', user, formState)

  useEffect(() => {
    if (user?.id) {
      setFormState(user)
    }
  }, [user?.id])

  return (
    <div>
      <form>
        <div>
          <Input
            name="name"
            value={formState?.name}
            onChangeFunc={onChangeFunc}
            required
          />
        </div>
      </form>
    </div>

  )
}
