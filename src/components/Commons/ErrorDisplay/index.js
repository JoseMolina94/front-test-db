import React from "react";

export const ErrorDisplay = (props) => {
  const {
    error = '',
    message = '',
    statusCode = ''
  } = props

  return (
    <div
      style={{
        background: '#FF3535',
        border: '1px solid red',
        color: 'white',
        fontSize: '16px',
        padding: '0 50px'
      }}
    >
      Platzi API: [{statusCode}] {message} {error === "Unauthorized" && "This user is protected from edits since it is one of the base users, try another more generic user of the API. Thank you."}
    </div>
  )
}
