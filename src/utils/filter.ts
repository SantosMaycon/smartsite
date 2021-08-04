import { CardProps } from 'types'

export const filterOpenedOrClosed = (
  checked: boolean,
  locations: CardProps[]
) => {
  checked = !checked
  return locations.filter(({ opened }) => opened === checked)
}

export const filterPeriod = (period: string, locations: CardProps[]) => {
  return locations.filter(({ schedules }) =>
    schedules.some(({ hour }) => open(hour, period))
  )
}

const open = (hour: string, period: string) => {
  const inicial = +hour.slice(0, 2)
  const final = +hour.slice(7, 9)

  if (period === 'manha') return inicial >= 6 && final <= 12

  if (period === 'tarde') return inicial >= 12 && final <= 18

  if (period === 'noite') return inicial >= 18 && final <= 23
}
