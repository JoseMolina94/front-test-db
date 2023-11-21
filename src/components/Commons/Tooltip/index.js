import React from "react";
import './styles.css'

export const Tooltip = (props) => {
  const {
    children = null,
    label = "Tooltip"
  } = props

  return (
    <div className="tooltip">
      {children}
      <span className="tooltiptext">
        {label}
      </span>
    </div>
  )
}
