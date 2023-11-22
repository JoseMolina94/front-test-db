import React from "react";

export const InfoAlert = (props) => {
  const {
    infoMessage = ''
  } = props

  return (
    <div
      style={{
        background: '#359AFF',
        border: '1px solid blue',
        color: 'white',
        fontSize: '16px',
        padding: '0 50px'
      }}
    >
      {infoMessage}
    </div>
  )
}
