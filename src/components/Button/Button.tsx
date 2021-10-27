import React from "react"
import { ButtonWrapper } from "./Button.style"

interface ButtonProps {
  onClick: () => void
  name: string
}

const Button: React.FC<ButtonProps> = ({ onClick, name }) => {
  return <ButtonWrapper onClick={onClick}>{name}</ButtonWrapper>
}

export default Button
