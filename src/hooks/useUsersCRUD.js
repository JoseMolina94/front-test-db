import React, { useState, useEffect } from "react";

export const useUsersCRUD = () => {
  const [loading, setLoading] = useState(false)

  const saveUser = (data) => {
    if (data?.id) {
      updateUser(data)
    } else {
      createUser(data)
    }
  }

  const createUser = (data) => {

  }

  const updateUser = (data) => {

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
