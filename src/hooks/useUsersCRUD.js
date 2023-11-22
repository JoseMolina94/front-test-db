import React, { useState } from "react";

export const useUsersCRUD = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const IMG_DEF = "https://img.freepik.com/premium-photo/low-poly-occupation-human-3d-character-illustration-cute-cartoon-stock-images-photos-pictures_662214-5196.jpg"

  const saveUser = async (data) => {
    setError(null)
    if (data?.id) {
      return await updateUser(data)
    } else {
      return await createUser(data)
    }
  }

  const createUser = async (data) => {
    //TO READ: Actualmente la imagen solo se recibe por url, y no tengo un servicio para subirla y obtener el url del base64 que se carga en el formulario, asi que se asigna una default para la prueba...
    data.avatar = IMG_DEF

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
    //TO READ: Actualmente la imagen solo se recibe por url, y no tengo un servicio para subirla y obtener el url del base64 que se carga en el formulario, asi que se elimina para la prueba...
    delete data.avatar

    try {
      setLoading(true)
      const response = await fetch(`https://api.escuelajs.co/api/v1/users/${data.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const dataResponse = await response.json()
      if (dataResponse?.error) {
        setError(dataResponse)
      }
      setLoading(false)
      return dataResponse
    } catch (e) {
      console.log(e)
      setLoading(false)
      setError(e)
      return e
    }
  }

  const deleteUser = ({userId, list}) => {
    //TO_READ: Actualmente la API de Platzi no permite eliminar usuarios, asi que esto es solo una simulacion...
    setError(null)
    return list.filter(ele => ele.id !== userId)
  }

  return {
    deleteUser,
    saveUser,
    createUser,
    updateUser,
    loading,
    error
  }
}
