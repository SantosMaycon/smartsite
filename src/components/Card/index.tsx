import * as S from './styles'

import Image from 'next/image'
import { CardProps } from 'types'
import { setIcons } from 'utils/setIcons'

const Card = ({
  title,
  content,
  opened,
  mask,
  towel,
  fountain,
  locker_room,
  schedules
}: CardProps) => (
  <>
    {mask && (
      <S.Wrapper>
        <S.Opened opened={opened}>{opened ? 'Aberto' : 'Fechado'}</S.Opened>
        <S.Title>{title}</S.Title>
        <S.Content
          opened={opened}
          dangerouslySetInnerHTML={{ __html: content }}
        />
        {opened && (
          <>
            <S.Legend>
              <Image
                src={setIcons('mask', mask)}
                width="65"
                height="65"
                alt={`Icon Mask ${mask.toUpperCase}`}
              />
              <Image
                src={setIcons('towel', towel)}
                width="65"
                height="65"
                alt={`Icon Towel ${towel.toUpperCase}`}
              />
              <Image
                src={setIcons('fountain', fountain)}
                width="65"
                height="65"
                alt={`Icon Fountain ${fountain.toUpperCase}`}
              />
              <Image
                src={setIcons('locker_room', locker_room)}
                width="65"
                height="65"
                alt={`Icon Locker Room ${locker_room.toUpperCase}`}
              />
            </S.Legend>
            <S.Schedules>
              {schedules.map(({ weekdays, hour }, id) => (
                <S.Schedule key={id}>
                  <S.Weekday>{weekdays}</S.Weekday>
                  <S.Hour>{hour}</S.Hour>
                </S.Schedule>
              ))}
            </S.Schedules>
          </>
        )}
      </S.Wrapper>
    )}
  </>
)

export default Card
