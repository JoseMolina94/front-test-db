import React from "react";

export const useUsersCRUD = () => {

  const deleteUser = ({userId, list}) => {
    //Actualmente la API no permite eliminar usuarios, asi que esto es solo una simulacion...
    return list.filter(ele => ele.id !== userId)
  }

  return {
    deleteUser
  }
}
