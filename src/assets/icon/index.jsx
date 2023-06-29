import {
    ArrowBottomLeftIcon,
    ArrowBottomRightIcon,
    ArrowDownIcon,
    ArrowLeftIcon,
    ArrowRightIcon,
    ArrowTopLeftIcon,
    ArrowTopRightIcon,
    ArrowUpIcon,
    InfoCircledIcon,
    AvatarIcon,
  } from '@radix-ui/react-icons'

  export const ICON_KEY = {
    ArrowBottomLeft: Symbol('ArrowBottomLeft'),
    ArrowBottomRight: Symbol('ArrowBottomRight'),
    ArrowDown: Symbol('ArrowDown'),
    ArrowLeft: Symbol('ArrowLeft'),
    ArrowRight: Symbol('ArrowRight'),
    ArrowTopLeft: Symbol('ArrowTopLeft'),
    ArrowTopRight: Symbol('ArrowTopLeft'),
    ArrowUp: Symbol('ArrowUp'),
    InfoCircled: Symbol('InfoCircled'),
    Avatar: Symbol('Avatar')
  }

  export default function Icon({ name, ...props}) {
    if (!name) return null
    const iconLookup = {
        ArrowBottomLeft: <ArrowBottomLeftIcon {...props} />,
        ArrowBottomRight: <ArrowBottomRightIcon {...props} />,
        ArrowDown: <ArrowDownIcon {...props} />,
        ArrowLeft: <ArrowLeftIcon {...props} />,
        ArrowRight: <ArrowRightIcon {...props} />,
        ArrowTopLeft: <ArrowTopLeftIcon {...props} />,
        ArrowTopRight: <ArrowTopRightIcon {...props} />,
        ArrowUp: <ArrowUpIcon {...props} />,
        InfoCircled: <InfoCircledIcon {...props} />,
        Avatar: <AvatarIcon {...props} />,
    }
    return iconLookup[name] ?? null
  }