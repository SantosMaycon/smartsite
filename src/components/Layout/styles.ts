import styled, { css } from 'styled-components'

export const Header = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 11.5rem;

    background-color: ${theme.colors.black};

    display: flex;
    align-items: center;
    justify-content: center;
  `}
`

export const Container = styled.main`
  max-width: 96rem;
  margin: 7rem auto;
  padding: 0 2rem;

  display: flex;
  flex-direction: column;
  gap: 5rem;
`

export const Heading = styled.h1`
  ${({ theme }) => css`
    width: 26rem;
    height: 10rem;

    font-size: 3.6rem;
    line-height: 4.2rem;
    font-weight: bold;

    color: ${theme.colors.darkGrey};

    position: relative;
    &::after {
      position: absolute;
      bottom: 0;
      content: '';
      display: block;
      width: 8.5rem;
      height: 1rem;
      background-color: ${theme.colors.darkGrey};
    }
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    width: 100%;
    font-size: 1.6rem;
    font-weight: 400;
    color: ${theme.colors.darkGrey};
  `}
`
export const Cards = styled.section`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2.5rem;
`

export const Footer = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    height: 20rem;

    background-color: ${theme.colors.darkGrey};

    display: flex;
    gap: 2.2rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 560px) {
      height: 18rem;
    }
  `}
`
export const Span = styled.span`
  ${({ theme }) => css`
    font-size: 1.8rem;
    color: ${theme.colors.greyRGBA};

    @media (max-width: 560px) {
      font-size: 1.6rem;
    }
  `}
`
export const Message = styled.h1`
  ${({ theme }) => css`
    margin: 2rem 0;

    font-size: 2.8rem;
    text-align: center;
    font-weight: bolder;

    color: ${theme.colors.red};
  `}
`
