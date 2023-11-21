import React, { useState, useEffect } from "react";

export const useGetUserById = (userId = '') => {
  const [user, setUser] = useState({})
  const [loadingUser, setLoadingUser] = useState(true)

  const getUser = async () => {
    try {
      await fetch(`https://api.escuelajs.co/api/v1/users/${userId}`)
        .then((response) => response.json())
        .then((dataResponse) => {
          setUser(dataResponse)
          setLoadingUser(false)
        })
    } catch (e) {
      console.log(e)
      setLoadingUser(false)
      return e
    }
  }

  useEffect(() => {
    if (userId) {
      getUser()
    }
  }, [userId])


  return {
    user,
    loadingUser
  }
}
