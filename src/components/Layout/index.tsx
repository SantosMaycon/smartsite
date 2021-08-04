import { useState } from 'react'
import Card from 'components/Card'
import Form from 'components/Form'
import Legend from 'components/Legend'
import Logo from 'components/Logo'
import { LayoutProps } from 'types'
import * as S from './styles'
import { filterOpenedOrClosed } from 'utils/filter'

const Layout = ({ locations }: LayoutProps) => {
  const [state, setState] = useState(filterOpenedOrClosed(false, locations))

  return (
    <>
      <S.Header>
        <Logo />
      </S.Header>
      <S.Container>
        <S.Heading>REABERTURA SMART FIT</S.Heading>
        <S.Text>
          O horário de funcionamento das nossas unidades está seguindo os
          decretos de cada município. Por isso, confira aqui se a sua unidade
          está aberta e as medidas de segurança que estamos seguindo.
        </S.Text>
        <Form state={state} setState={setState} locations={locations} />
        <Legend />
        <S.Cards>
          {state.map((object, id) => (
            <Card key={id} {...object} />
          ))}
        </S.Cards>
      </S.Container>
      <S.Footer>
        <Logo size="small" />
        <S.Span>Todos os direitos reservados - 2020</S.Span>
      </S.Footer>
    </>
  )
}

export default Layout
