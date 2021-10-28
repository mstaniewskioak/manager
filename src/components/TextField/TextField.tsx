import React from "react"
import {
  TextFieldWrapper,
  Wrapper,
  LeftComponentWrapper,
  RightComponentWrapper,
} from "./TextField.style"

interface TextFieldProps {
  name: string
  placeHolder: string
  leftComponent?: JSX.Element
  rightComponent?: JSX.Element
}

const TextField = ({
  placeHolder,
  name,
  leftComponent,
  rightComponent,
}: TextFieldProps): JSX.Element => {
  return (
    <Wrapper>
      {leftComponent && (
        <LeftComponentWrapper tabIndex={0}>
          {leftComponent}
        </LeftComponentWrapper>
      )}
      <TextFieldWrapper placeholder={placeHolder} name={name} />
      {rightComponent && (
        <RightComponentWrapper tabIndex={0}>
          {rightComponent}
        </RightComponentWrapper>
      )}
    </Wrapper>
  )
}

export default TextField
