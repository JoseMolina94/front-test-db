import React, { useState, useEffect } from 'react'
import { useGetUsers } from "../../hooks/useGetUsers";
import { UsersGridList } from "../../components/UsersGridList";
import { InfoAlert } from "../../components/Commons/InfoAlert";
import {Link} from "react-router-dom";
import { Input } from "../../components/Commons/Input";

import './styles.css'

export const HomeContainer = () => {
  const {
    usersList,
    loadingUsersList,
    setUsersList
  } = useGetUsers()
  const [userListToShow, setUserListToShow] = useState([])
  const [filter, setFilter] = useState("")

  const filterList = (search = '') => {
    const list = usersList.filter(ele => ele.name.toLowerCase().includes(search.toLowerCase()))
    setUserListToShow(list)
  }

  const onChangeFunc = ({ value }) => {
    setFilter(value)
  }

  useEffect(() => {
    setUserListToShow(usersList)
  }, [loadingUsersList])

  useEffect(() => {
    filterList(filter)
  }, [filter])

  return (
    <div>
      <div className="home-header">
        <h1 className="title">
          Lista de Usuarios
        </h1>

        <div className="header-options">
          <div className="filter-container">
            <Input
              name="search"
              value={filter}
              placeholder="Filtro de usuarios..."
              onChangeFunc={onChangeFunc}
            />
          </div>


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

      </div>
      <InfoAlert
        infoMessage="Bienvenido a esta prueba, podras hacer el CRUD de usuarios, pero ten en cuenta que no podras hacer nada a los usuarios Jhon, Maria o Admin, por restricciones de la API de Platzi. Tambien recuerda que esta API es libre, por lo que los datos aqui mostrados tambien son de otras personas, y la API se limpia cada cierto tiempo por temas de mantenimiento, asi que no te asustes si los usuarios desaparecen."
      />

      <UsersGridList
        usersList={userListToShow}
        loading={loadingUsersList}
        setUsersList={setUsersList}
      />
    </div>
  )
}
