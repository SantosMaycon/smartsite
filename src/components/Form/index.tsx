import { FormEvent, useState } from 'react'
import Button from 'components/Button'
import InputRadio from 'components/InputRadio'
import InputCheck from 'components/InputCheck'
import * as S from './styles'
import { FormProps } from 'types'
import { filterOpenedOrClosed, filterPeriod } from 'utils/filter'

const Form = ({ locations, state, setState }: FormProps) => {
  const [period, setPeriod] = useState('')
  const [checked, setChecked] = useState(false)

  function clickReset() {
    setPeriod('')
    setChecked(false)
    setState(filterOpenedOrClosed(false, locations))
  }

  function clickSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setState(filterOpenedOrClosed(checked, locations))
    if (period) setState((state) => filterPeriod(period, state))
  }

  return (
    <S.Wrapper>
      <S.Time>
        <S.SpanTime>Horário</S.SpanTime>
      </S.Time>
      <S.Title>Qual período quer treinar?</S.Title>
      <S.Form onSubmit={clickSubmit}>
        <InputRadio
          state={period}
          setState={setPeriod}
          value="manha"
          periodName="Manhã"
          periodTime="06:00 às 12:00"
        />
        <InputRadio
          state={period}
          setState={setPeriod}
          value="tarde"
          periodName="Tarde"
          periodTime="12:01 às 18:00"
        />
        <InputRadio
          state={period}
          setState={setPeriod}
          value="noite"
          periodName="Noite"
          periodTime="18:01 às 23:00"
        />
        <S.RowCheck>
          <InputCheck
            label="Exibir unidades fechadas"
            state={checked}
            setState={setChecked}
          />
          <S.Find>
            Resultados encontrados: <S.Result>{state.length}</S.Result>{' '}
          </S.Find>
        </S.RowCheck>
        <S.RowButton>
          <Button label="ENCONTRAR UNIDADE" type="submit" />
          <Button label="LIMPAR" type="reset" onClick={clickReset} />
        </S.RowButton>
      </S.Form>
    </S.Wrapper>
  )
}

export default Form
