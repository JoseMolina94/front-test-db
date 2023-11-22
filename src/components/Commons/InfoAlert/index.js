import React from "react";
import './styles.css'

export const InfoAlert = (props) => {
  const {
    infoMessage = ''
  } = props

  return (
    <div className="info-alert">
      {infoMessage}
    </div>
  )
}
