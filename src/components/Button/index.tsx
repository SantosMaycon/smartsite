import { MouseEventHandler } from 'react'
import * as S from './styles'

export type ButtonProps = {
  label: 'ENCONTRAR UNIDADE' | 'LIMPAR'
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}

const Button = ({ label, type, onClick }: ButtonProps) => (
  <S.Wrapper type={type} label={label} onClick={onClick}>
    {label}
  </S.Wrapper>
)

export default Button
