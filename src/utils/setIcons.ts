export const Icon = {
  mask_required: '/img/required-mask.png',
  mask_recommended: '/img/recommended-mask.png',
  towel_required: '/img/required-towel.png',
  towel_recommended: '/img/recommended-towel.png',
  fountain_partial: '/img/partial-fountain.png',
  fountain_not_allowed: '/img/forbidden-fountain.png',
  locker_room_allowed: '/img/required-lockerroom.png',
  locker_room_partial: '/img/partial-lockerroom.png',
  locker_room_closed: '/img/forbidden-lockerroom.png'
}
export const setIcons = (label: string, type: string) => {
  const obj = label + '_' + type
  return eval('Icon[obj]')
}
