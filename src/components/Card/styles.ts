import styled, { css } from 'styled-components'

type OpenedProps = {
  opened: boolean
}

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 29rem;
    min-height: 43rem;

    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    background-color: ${theme.colors.greyRGBA};
    border-radius: 0.8rem;

    box-shadow: 0.1rem 0.1rem 0.8rem 0rem rgb(21 21 21 / 25%);
  `}
`
export const Opened = styled.span<OpenedProps>`
  ${({ theme, opened }) => css`
    font-size: 1.6rem;
    font-weight: bold;
    color: ${opened ? theme.colors.yellow : theme.colors.red};
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: 2.6rem;
    font-weight: bold;
    color: ${theme.colors.darkGrey};
  `}
`

export const Content = styled.div<OpenedProps>`
  ${({ theme, opened }) => css`
    color: transparent;
    border-bottom: 0.2rem solid
      ${opened ? 'rgb(25 25 25 / 20%)' : 'transparent'};
    & > p {
      font-size: 1.6rem;
      font-weight: 400;
      margin-bottom: 1.5rem;
      color: ${theme.colors.lightGrey};
    }
    & > span {
      font-size: 1rem;
      color: ${theme.colors.red};
    }
  `}
`
export const Legend = styled.div`
  height: 10rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Schedules = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`

export const Schedule = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Weekday = styled.span`
  ${({ theme }) => css`
    font-size: 2.4rem;
    font-weight: bold;
    color: ${theme.colors.darkGrey};
  `}
`
export const Hour = styled.span`
  ${({ theme }) => css`
    font-size: 1.6rem;
    font-weight: 400;
    color: ${theme.colors.lightGrey};
  `}
`
