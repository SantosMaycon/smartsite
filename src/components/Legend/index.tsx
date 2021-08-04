import * as S from './styles'
import legends from './content'

import Image from 'next/image'

const Legend = () => (
  <S.Wrapper>
    {legends.map(({ title, contents }, id) => (
      <S.Legend key={id}>
        <S.Title>{title}</S.Title>
        <S.Content>
          {contents.map(({ url, label }, id) => (
            <S.Item key={id}>
              <Image src={url} width="65" height="65" alt={label} />
              <S.Label>{label}</S.Label>
            </S.Item>
          ))}
        </S.Content>
      </S.Legend>
    ))}
  </S.Wrapper>
)

export default Legend
