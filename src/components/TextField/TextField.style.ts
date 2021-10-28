import styled from "styled-components"

export const DivWrapper = styled.div`
  width: auto;
  background-color: #fff;
  display: flex;
  align-items: center;
  border-radius: 4px;
  cursor: text;
  &:focus-within {
    box-shadow: 0 0 0.5em grey;
  }
`
export const LeftComponentWrapper = styled.div`
  height: 100%;
  padding: 13px 0px 13px 15px;
`

export const RightComponentWrapper = styled.div`
  height: 100%;
  padding: 13px 15px 13px 0px;
`

export const TextFieldWrapper = styled.input`
  flex: 1;
  height: 100%;
  padding: 15px 15px 15px 15px;
  border: none;
  &:enabled {
    border: none;
    outline: none;
  }
`
