import React, { useState, useEffect } from 'react';
import { Input } from "../../components/Commons/Input";
import { useGetUserById } from "../../hooks/useGetUserById";
import {useUsersCRUD} from "../../hooks/useUsersCRUD";
import { ImageInput } from "../../components/Commons/ImageInput";
import { OptionSelect } from "../../components/Commons/OptionSelect";
import { MdOutlineArrowBack } from "react-icons/md";
import { ErrorDisplay } from "../../components/Commons/ErrorDisplay";
import moment from "moment";
import {Link} from "react-router-dom";

import './styles.css'

export const UserContainer = ({ userId = '' }) => {
  const isEdit = userId !== 'create'
  const {
    user
  } = useGetUserById( isEdit ? userId : '')
  const {
    saveUser,
    loading,
    error
  } = useUsersCRUD()
  const initialValues = {
    name: "",
    email: "",
    avatar: "",
    role: "customer",
    password: "1234",
    birthday: moment().format("YYYY-MM-DD"),
    genre: "male"
  }
  const [formState, setFormState] = useState(initialValues)
  const genresOptions = [
    { label: "Hombre", value: "male" },
    { label: "Mujer", value: "female" }
  ]
  const roleOptions = [
    { label: "Cliente", value: "customer" },
    { label: "Admininstrador", value: "admin" },
  ]

  const refresh = () => {
    //TO READ: solo para mantener la imagen del formulario, por limitaciones en la API de Platzi...
    setFormState({ ...formState, ...user})
  }

  const onChangeFunc = ({name, value}) => {
    let currentValues = formState
    currentValues[name] = value

    setFormState({...currentValues})
  }

  const onSubmit = async () => {
    const response = await saveUser(formState)
    console.log(response)

    await refresh()
  }

  useEffect(() => {
    if (user?.id) {
      setFormState({ ...formState, ...user})
    }
  }, [user?.id])

  return (
    <div>
      <div className="header" >
        <div
          className="icon"
          style={{
            fontSize: "32px",
            marginTop: "10px"
          }}
        >
          <Link to="/">
            <MdOutlineArrowBack />
          </Link>
        </div>

        <h1 className="title">
          Usuario
        </h1>
      </div>

      {
        error && <ErrorDisplay {...error} />
      }

      <div className="form-container">
          <div className="image-input-container">
            <ImageInput
              name="avatar"
              value={formState?.avatar}
              onChangeFunc={onChangeFunc}
            />

            <div className="image-info">
              <strong>Aviso:</strong> El cambio de imagen es solo de muestra, dado que no hay un servicio para subir las imagenes, la imagen asignada al guardar sera una predefinida en la app.
            </div>
          </div>

        <div className="inputs-container">
          <Input
            name="name"
            value={formState?.name}
            onChangeFunc={onChangeFunc}
            label="Nombre"
            required
          />
          <Input
            name="email"
            value={formState?.email}
            onChangeFunc={onChangeFunc}
            label="Email"
            required
          />

          <div className="three-columns-section">
            <Input
              name="birthday"
              value={formState?.birthday}
              onChangeFunc={onChangeFunc}
              label="Birthday"
              type="date"
              required
            />

            <OptionSelect
              options={genresOptions}
              name="genre"
              value={formState?.genre}
              onChangeFunc={onChangeFunc}
              label="Género"
            />

            <OptionSelect
              options={roleOptions}
              name="role"
              value={formState?.role}
              onChangeFunc={onChangeFunc}
              label="Rol"
            />
          </div>
        </div>
      </div>

      <div className="user-form-button-save-section" >
        <button
          className={loading ? "save-button button-disabled" : "save-button"}
          disabled={loading}
          type="button"
          onClick={() => onSubmit()}
        >
          {loading ? "Saving..." : "Save"}
        </button>
      </div>
    </div>
  )
}
