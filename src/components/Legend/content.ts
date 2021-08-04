import { Icon } from 'utils/setIcons'

const legends = [
  {
    title: 'Máscara',
    contents: [
      { url: Icon.mask_required, label: 'Obrigatório' },
      { url: Icon.mask_recommended, label: 'Recomendado' }
    ]
  },
  {
    title: 'Toalha',
    contents: [
      {
        url: Icon.towel_required,
        label: 'Obrigatório'
      },
      {
        url: Icon.towel_recommended,
        label: 'Recomendado'
      }
    ]
  },
  {
    title: 'Bebedouro',
    contents: [
      {
        url: Icon.fountain_partial,
        label: 'Parcial'
      },
      {
        url: Icon.fountain_not_allowed,
        label: 'Proibido'
      }
    ]
  },
  {
    title: 'Vestiários',
    contents: [
      {
        url: Icon.locker_room_allowed,
        label: 'Liberado'
      },
      {
        url: Icon.locker_room_partial,
        label: 'Parcial'
      },
      {
        url: Icon.locker_room_closed,
        label: 'Proibido'
      }
    ]
  }
]

export default legends
