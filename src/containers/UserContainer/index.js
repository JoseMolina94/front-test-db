import React, { useState, useEffect } from 'react';
import { Input } from "../../components/Commons/Input";
import { useGetUserById } from "../../hooks/useGetUserById";
import { ImageInput } from "../../components/Commons/ImageInput";
import { OptionSelect } from "../../components/Commons/OptionSelect";
import { MdOutlineArrowBack } from "react-icons/md";
import moment from "moment";
import {Link} from "react-router-dom";

import './styles.css'

export const UserContainer = ({ userId = '' }) => {
  const {
    user
  } = useGetUserById(userId)
  const initialValues = {
    name: "",
    email: "",
    avatar: "",
    role: "",
    password: "123",
    birthday: moment().format("YYYY-MM-DD"),
    genre: "M"
  }
  const [formState, setFormState] = useState(initialValues)
  const genresOptions = [
    { label: "Mujer", value: "female" },
    { label: "Hombre", value: "male" },
  ]
  const roleOptions = [
    { label: "Cliente", value: "customer" },
    { label: "Admininstrador", value: "admin" },
  ]

  const onChangeFunc = ({name, value}) => {
    console.log('III', value)
    let currentValues = formState
    currentValues[name] = value

    setFormState({...currentValues})
  }

  console.log('FORM STATE', formState)

  useEffect(() => {
    if (user?.id) {
      setFormState({ ...formState, ...user})
    }
  }, [user?.id])

  return (
      <form>
        <div className="user-form-container">
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

          <div className="form-container">
            <div className="image-input-container">
              <ImageInput
                name="avatar"
                value={formState?.avatar}
                onChangeFunc={onChangeFunc}
              />
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
        </div>
      </form>
  )
}
