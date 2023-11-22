import React, { useState } from "react";

export const useUsersCRUD = () => {
  const [loading, setLoading] = useState(false)

  const saveUser = async (data) => {
    if (data?.id) {
      return await updateUser(data)
    } else {
      return await createUser(data)
    }
  }

  const createUser = async (data) => {
    try {
      setLoading(true)
      await fetch("https://api.escuelajs.co/api/v1/users/", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((dataResponse) => {
          setLoading(false)
          return dataResponse
        })
    } catch (e) {
      console.log(e)
      setLoading(false)
      return e
    }
  }

  const updateUser = async (data) => {
    try {
      setLoading(true)
      await fetch(`https://api.escuelajs.co/api/v1/users/${data.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((dataResponse) => {
          setLoading(false)
          return dataResponse
        })
    } catch (e) {
      console.log(e)
      setLoading(false)
      return e
    }
  }

  const deleteUser = ({userId, list}) => {
    //TO_READ: Actualmente la API de Platzi no permite eliminar usuarios, asi que esto es solo una simulacion...
    return list.filter(ele => ele.id !== userId)
  }

  return {
    deleteUser,
    saveUser,
    createUser,
    updateUser,
    loading
  }
}
