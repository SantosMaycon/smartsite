import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    width: 100%;
    /* height: 50rem; */
    padding: 2rem;

    display: flex;
    flex-direction: column;
    gap: 3rem;

    border: 0.35rem solid ${theme.colors.greyRGBA};
    border-radius: 0.8rem;
  `}
`

export const Time = styled.div`
  width: 9rem;
  height: 3rem;

  background-image: url('/img/icon-hour.png');
  background-repeat: no-repeat;
  background-size: contain;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const SpanTime = styled.span`
  ${({ theme }) => css`
    font-size: 1.4rem;
    font-weight: 500;
    color: ${theme.colors.lightGrey};
  `}
`
export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 2.8rem;
    font-weight: 500;
    color: ${theme.colors.lightGrey};

    padding-left: 1rem;
    padding-bottom: 1rem;
    display: block;
    border-bottom: 0.2rem solid ${theme.colors.greyRGBA};
  `}
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const RowCheck = styled.div`
  width: 100%;
  min-height: 4rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  & > label {
    width: auto;
  }

  @media (max-width: 620px) {
    flex-direction: column;

    gap: 1rem;
    @media (max-width: 390px) {
      & > label {
        font-size: 1.6rem;
      }
    }
  }
`
export const Find = styled.span`
  ${({ theme }) => css`
    text-align: right;
    min-width: 26rem;
    font-size: 1.8rem;
    font-weight: 500;
    color: ${theme.colors.darkGrey};

    @media (max-width: 620px) {
      text-align: center;
      min-width: 100%;
    }

    @media (max-width: 390px) {
      font-size: 1.6rem;
    }
  `}
`
export const Result = styled.strong`
  ${({ theme }) => css`
    display: inline;
    font-size: 2rem;
    font-weight: bold;
    color: ${theme.colors.black};

    @media (max-width: 390px) {
      font-size: 1.6rem;
    }
  `}
`
export const RowButton = styled.div`
  width: 100%;

  display: flex;
  gap: 4rem;
  align-items: center;
  justify-content: center;

  & > button {
    max-width: 36rem;
  }

  @media (max-width: 620px) {
    flex-direction: column;
    gap: 1rem;

    & > button {
      max-width: 100%;
    }
  }
`
