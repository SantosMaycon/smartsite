import { Dispatch, SetStateAction } from 'react'

export type Schedule = {
  weekdays: string
  hour: string
}

export type CardProps = {
  id?: number
  title: string
  content: string
  opened: boolean
  mask: 'required' | 'recommended'
  towel: 'required' | 'recommended'
  fountain: 'partial' | 'not_allowed'
  locker_room: 'allowed' | 'partial' | 'closed'
  schedules: Schedule[]
}

export type DataProps = {
  data: {
    current_country_id: number
    locations: CardProps[]
    wp_total: number
    total: number
    success: boolean
  }
}

export type LayoutProps = {
  locations: CardProps[]
}

export type FormProps = {
  state: CardProps[]
  setState: Dispatch<SetStateAction<CardProps[]>>
  locations: CardProps[]
}
