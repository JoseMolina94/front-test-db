import React, { useState, useEffect } from 'react'

export const useGetUsers = () => {
  const [usersList, setUsersList] = useState([])
  const [loadingUsersList, setLoadingUsersList] = useState(true)

  const getUsers = async () => {
    try {
      await fetch("https://api.escuelajs.co/api/v1/users")
        .then((response) => response.json())
        .then((dataResponse) => {
          setUsersList(dataResponse)
          setLoadingUsersList(false)
        })
    } catch (e) {
      console.log(e)
      setLoadingUsersList(false)
      return e
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  return {
    usersList,
    loadingUsersList,
    setUsersList,
    setLoadingUsersList
  }
}
