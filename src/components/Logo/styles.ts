import styled, { css } from 'styled-components'
import { LogoProps } from '.'

const wrapperModifiers = {
  small: () => css`
    width: 14.6rem;
    height: 5.2rem;
  `,
  normal: () => css`
    width: 20rem;
    height: 7.5rem;
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ size }) => css`
    ${!!size && wrapperModifiers[size]}
  `}
`
