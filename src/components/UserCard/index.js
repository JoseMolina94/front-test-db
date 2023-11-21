import React from 'react'
import { MdOutlineClose, MdModeEdit } from "react-icons/md";
import { Tooltip } from "../Commons/Tooltip";
import './styles.css'

export const UserCard = (props) => {
  const {
    avatar,
    name,
    email,
    id,
    deleteUserFunc = (userId) => {}
  } = props

  return (
    <div className="card">
      <div
        className="user-image"
        style={{
          backgroundImage: `url("${avatar}")`,
        }}
      >

          <div className="edit-button">
            <Tooltip label="Editar">
              <MdModeEdit />
            </Tooltip>
          </div>

          <div className="delete-button" onClick={() => deleteUserFunc(id)}>
            <Tooltip label="Eliminar">
              <MdOutlineClose />
            </Tooltip>
          </div>

      </div>
      <div className="user-name">
        {name}
      </div>
      <div className="user-email">
        {email}
      </div>
    </div>
  )
}
