import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

const wrapperModifiers = {
  'ENCONTRAR UNIDADE': (theme: DefaultTheme) => css`
    background-color: ${theme.colors.yellow};
    border: 0.3rem solid transparent;
  `,
  LIMPAR: (theme: DefaultTheme) => css`
    background-color: #ffffff;
    border: 0.3rem solid ${theme.colors.greyRGBA};
  `
}

export const Wrapper = styled.button<ButtonProps>`
  ${({ theme, label }) => css`
    width: 100%;
    height: 4.5rem;

    font-size: 1.6rem;
    font-weight: bold;
    text-align: center;

    border: 0.3rem solid ${theme.colors.black};
    border-radius: 0.4rem;

    cursor: pointer;

    ${!!label && wrapperModifiers[label](theme)};
  `}
`
