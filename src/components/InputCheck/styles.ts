import styled, { css } from 'styled-components'

export const Label = styled.label`
  ${({ theme }) => css`
    width: 100%;
    height: 4rem;

    display: flex;
    align-items: center;
    gap: 0.6rem;

    cursor: pointer;

    font-size: 1.8rem;
    font-weight: 500;
    color: ${theme.colors.darkGrey};
  `}
`

export const Input = styled.input`
  width: 1.6rem;
  height: 1.6rem;
`
