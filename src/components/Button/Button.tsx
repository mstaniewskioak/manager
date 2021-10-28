import React from "react"
import { ButtonWrapper } from "./Button.style"

export type ButtonVariant = "primary" | "secondary"

interface ButtonProps {
  onClick: () => void
  name: string
  variant: ButtonVariant
}

const Button = ({ onClick, name, variant }: ButtonProps): JSX.Element => {
  return (
    <ButtonWrapper onClick={onClick} variant={variant}>
      {name}
    </ButtonWrapper>
  )
}

export default Button
