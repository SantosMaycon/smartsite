import { Dispatch, SetStateAction } from 'react'
import * as S from './styles'

export type InputRadioProps = {
  state: string
  setState: Dispatch<SetStateAction<string>>
  value: 'manha' | 'tarde' | 'noite'
  periodName: 'Manhã' | 'Tarde' | 'Noite'
  periodTime: '06:00 às 12:00' | '12:01 às 18:00' | '18:01 às 23:00'
}

const InputRadio = ({
  state,
  setState,
  value,
  periodName,
  periodTime
}: InputRadioProps) => {
  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    setState(target.value)
  }

  return (
    <S.Label>
      <S.Input
        type="radio"
        onChange={handleChange}
        value={value}
        checked={value == state}
      />
      <S.DivSpan>
        <S.Span>{periodName}</S.Span>
        <S.Span>{periodTime}</S.Span>
      </S.DivSpan>
    </S.Label>
  )
}

export default InputRadio
