import { Dispatch, SetStateAction } from 'react'
import * as S from './styles'

export type InputCheckProps = {
  label: string
  state: boolean
  setState: Dispatch<SetStateAction<boolean>>
}

const InputCheck = ({ label, state, setState }: InputCheckProps) => (
  <S.Label>
    <S.Input
      type="checkbox"
      checked={state}
      onChange={({ target }) => {
        setState(target.checked)
      }}
    />
    {label}
  </S.Label>
)

export default InputCheck
