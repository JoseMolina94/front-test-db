import React, {useEffect, useState} from "react";
import './styles.css'

export const OptionSelect = (props) => {
  const {
    name = "",
    value = "",
    onChangeFunc = (props) => {},
    style = {},
    label = "",
    required = false,
    options = []
  } = props
  const [inputValue, setInputValue] = useState(value)

  const onChange = (e) => {
    setInputValue(e.target.value)
  }

  useEffect(() => {
    onChangeFunc({name, value: inputValue})
  }, [inputValue])

  useEffect(() => {
    setInputValue(value)
  }, [value])

  return (
    <div className="select-container">
      <p
        className="select-label"
        style={{
          fontSize: style?.fontSize && `calc(${style?.fontSize} - 6px)`
        }}
      >
        {label}
      </p>

      <select
        className="select"
        name={name}
        onChange={onChange}
        required={required}
        style={style}
      >
        {
          options.map((option, index) => (
            <option
              value={option.value}
              key={"optsel-" + index}
            >
              {option.label}
            </option>
          ))
        }
      </select>
    </div>
  )
}
