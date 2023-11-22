import React from 'react'
import { useGetUsers } from "../../hooks/useGetUsers";
import { UsersGridList } from "../../components/UsersGridList";
import {Link} from "react-router-dom";

import './styles.css'

export const HomeContainer = () => {
  const {
    usersList,
    loadingUsersList,
    setUsersList
  } = useGetUsers()

  return (
    <div>
      <div className="home-header">
        <h1 className="title">
          Lista de Usuarios
        </h1>

        <div className="create-button-section">
          <Link to="/user/create">
            <button
              className="create-button"
            >
              Crear Usuario
            </button>
          </Link>
        </div>

      </div>

      <UsersGridList
        usersList={usersList}
        loading={loadingUsersList}
        setUsersList={setUsersList}
      />
    </div>
  )
}
