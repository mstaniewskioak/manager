import styled, { css } from "styled-components"
import { ButtonVariant } from "./Button"

const variants = {
  primary: css`
    background-color: #007bff;
    color: #fff;
    border: solid #007bff 2px;
    &:hover {
      background-color: #fff;
      color: #007bff;
      border solid #007bff 2px;
    }
  `,
  secondary: css`
    background-color: #e6e6e6;
    color: #384c6d;
    border: solid #e6e6e6 2px;
    &:hover {
      background-color: #fff;
      border solid #e6e6e6 2px;
    }
  `,
}

export const ButtonWrapper = styled.button<{ variant: ButtonVariant }>`
  width: auto;
  padding: 8px 12px;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  ${({ variant }) => variants[variant]}
`
