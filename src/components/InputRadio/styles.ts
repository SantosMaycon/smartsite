import styled, { css } from 'styled-components'

export const Label = styled.label`
  ${({ theme }) => css`
    width: 100%;
    height: 3rem;

    display: flex;
    align-items: center;
    gap: 0.6rem;

    padding-bottom: 1rem;
    border-bottom: 0.2rem solid ${theme.colors.greyRGBA};

    cursor: pointer;
  `}
`

export const Input = styled.input`
  width: 1.6rem;
  height: 1.6rem;
`
export const DivSpan = styled.div`
  width: 100%;

  display: flex;
  gap: 1rem;
  justify-content: space-between;
`

export const Span = styled.span`
  ${({ theme }) => css`
    font-size: 1.8rem;
    font-weight: 500;
    color: ${theme.colors.lightGrey};
  `}
`
