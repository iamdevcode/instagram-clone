import images from '#/images'
import {
  SvgHomeIcon,
  SvgLikeIcon,
  SvgNewIcon,
  SvgSearchIcon
} from '#/svg/icons'

export const tabs_routes = [
  {
    name: 'index',
    icon: <SvgHomeIcon />
  },
  {
    name: 'search',
    icon: <SvgSearchIcon />
  },
  {
    name: 'new',
    icon: <SvgNewIcon />
  },
  {
    name: 'like',
    icon: <SvgLikeIcon />
  },
  {
    name: 'profile',
    image: images.user
  }
]
