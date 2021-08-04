import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    width: 100%;
    padding: 4rem 1.5rem;

    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;

    background-color: ${theme.colors.greyRGBA};
    border-radius: 0.2rem;
  `}
`
export const Legend = styled.div`
  width: 20rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 3rem;
`
export const Title = styled.span`
  ${({ theme }) => css`
    text-align: center;
    font-size: 1.8rem;
    font-weight: bold;
    color: ${theme.colors.black};
  `}
`
export const Content = styled.ul`
  display: flex;
  justify-content: center;
`
export const Item = styled.li`
  text-align: center;
`
export const Label = styled.span`
  padding: 1rem;
  display: block;

  font-size: 1.4rem;
  font-weight: 500;
`
