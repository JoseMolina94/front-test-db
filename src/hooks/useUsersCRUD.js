import React, { useState, useEffect } from "react";

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

  }

  const updateUser = async (data) => {
    //TO READ: La API de Platzi no recibe todos los datos, asi que para la simulacion solo enviare a los metodos la data aceptada...

    const dataToSend = {
      name: data.name,
      email: data.email,
    }

    try {
      setLoading(true)
      await fetch(`https://api.escuelajs.co/api/v1/users/${data.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend),
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
