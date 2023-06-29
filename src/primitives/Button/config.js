import PropTypes from 'prop-types'

export const ButtonFont = {
    LIGHT: 'lgt',
    REGULAR: 'reg',
    MEDIUM: 'med',
    BOLD: 'bld',
    BLACK: 'blk',
}

export const ButtonSize = {
    XSMALL: 'h-10 gap-4 px-4 text-base',
    SMALL: 'h-12 gap-6 px-6 text-md',
    MEDIUM: 'h-14 gap-8 px-8 text-lg',
    LARGE: 'h-16 gap-10 px-10 text-lg',
    XLARGE: 'h-20 gap-12 px-12 text-xl',
  }

  export const IconButtonSize = {
    XSMALL: 'h-14',
    SMALL: 'h-16',
    MEDIUM: 'h-20',
    LARGE: 'h-24',
    XLARGE: 'h-28',
  }

  export const ButtonRadius = {
    XSMALL: 'rounded-xs',
    SMALL: 'rounded-sm',
    MEDIUM: 'rounded-md',
    LARGE: 'rounded-lg',
    XLARGE: 'rounded-xl',
    XXLARGE: 'rounded-xl',
    CIRCLE: 'rounded-full',
    SQUARE: 'rounded-none',
  }

  export const ButtonIconSize = {
    XSMALL: 16,
    SMALL: 20,
    MEDIUM: 24,
    LARGE: 28,
    XLARGE: 32,
  }

  export const ButtonKind = {
    SOLID: Symbol('SOLID'),
    OUTLINE: Symbol('OUTLINE'),
    GHOST: Symbol('GHOST'),
    TINTED: Symbol('TINTED')
  }

  export const ButtonVariant = {
    PRIMARY: Symbol('PRIMARY'),
    ACTION: Symbol('ACTION'),
    ACCENT: Symbol('ACCENT'),
    DANGER: Symbol('DANGER'),
    SUCCESS: Symbol('SUCCESS'),
    WARNING: Symbol('WARNING')
  }

  export const ButtonTheme = {
    'PRIMARY-OUTLINE': 'border-primary-950 bg-transparent hover:bg-primary-100 active:bg-primary-50 text-primary-950',
    'PRIMARY-TINTED': 'border-transparent bg-primary-100 hover:bg-primary-200 active:bg-primary-100 text-primary-950',
    'PRIMARY-SOLID': 'border-transparent bg-primary-950 hover:bg-primary-800 active:bg-primary-900 text-primary-50',
    'PRIMARY-GHOST': 'border-transparent bg-transparent text-primary-950 hover:bg-primary-200 active:bg-primary-100',
    'ACTION-OUTLINE': 'border-tu-blue-600 bg-transparent text-tu-blue-600 hover:bg-tu-blue-800 active:bg-tu-blue-950 hover:text-tu-blue-300',
    'ACTION-TINTED': 'border-transparent bg-tu-blue-900 text-tu-blue-600 hover:bg-tu-blue-800 active:bg-tu-blue-700 hover:text-tu-blue-300',
    'ACTION-SOLID': 'border-transparent bg-tu-blue-500 text-tu-blue-950 hover:bg-tu-blue-700 active:bg-tu-blue-600',
    'ACTION-GHOST': 'border-transparent bg-transparent text-tu-blue-600 hover:bg-tu-blue-900 active:bg-tu-blue-800',
    'ACCENT-OUTLINE': 'border-tu-yellow-600 bg-transparent text-tu-yellow-600 hover:bg-tu-yellow-800 active:bg-tu-yellow-700 hover:text-tu-yellow-300',
    'ACCENT-TINTED': 'border-transparent bg-tu-yellow-900 text-tu-yellow-600 hover:bg-tu-yellow-800 active:bg-tu-yellow-700 hover:text-tu-yellow-300',
    'ACCENT-SOLID': 'border-transparent bg-tu-yellow-500 text-tu-yellow-50 hover:bg-tu-yellow-700 active:bg-tu-yellow-600',
    'ACCENT-GHOST': 'border-transparent bg-transparent text-tu-yellow-600 hover:bg-tu-yellow-900 active:bg-tu-yellow-800',
    'DANGER-OUTLINE': 'border-red-600 bg-transparent text-red-600 hover:bg-red-200 active:bg-red-50 hover:text-red-800',
    'DANGER-TINTED': 'border-transparent bg-red-900 text-red-600 hover:bg-red-200 active:bg-red-700 hover:text-red-800',
    'DANGER-SOLID': 'border-transparent bg-red-500 text-red-50 hover:bg-red-700 active:bg-red-600',
    'DANGER-GHOST': 'border-transparent bg-transparent text-red-600 hover:bg-red-200 active:bg-red-800',
    'SUCCESS-OUTLINE': 'border-green-600 bg-transparent text-green-600 hover:bg-green-200 active:bg-green-50 hover:text-green-800',
    'SUCCESS-TINTED': 'border-transparent bg-green-900 text-green-600 hover:bg-green-200 active:bg-green-700 hover:text-green-800',
    'SUCCESS-SOLID': 'border-transparent bg-green-500 text-green-50 hover:bg-green-700 active:bg-green-600',
    'SUCCESS-GHOST': 'border-transparent bg-transparent text-green-600 hover:bg-green-200 active:bg-green-300',
    'WARNING-OUTLINE': 'border-orange-600 bg-transparent text-orange-600 hover:bg-orange-200 active:bg-orange-50 hover:text-orange-800',
    'WARNING-TINTED': 'border-transparent bg-orange-900 text-orange-600 hover:bg-orange-200 active:bg-orange-700 hover:text-orange-800',
    'WARNING-SOLID': 'border-transparent bg-orange-500 text-orange-50 hover:bg-orange-700 active:bg-orange-600',
    'WARNING-GHOST': 'border-transparent bg-transparent text-orange-600 hover:bg-orange-300 active:bg-orange-800',
  }

  export const BUTTON_THEME_KEY = Object.keys(ButtonTheme)

  export const ButtonAdditionalProps = {
      /**
   * Specifies the message provided to screen readers when the danger button variant is selected
   */
  dangerText: PropTypes.string,
  /**
   * Indicates the loading state of the button element
   */
  loading: PropTypes.bool,
  /**
   * Specifies the position of loader relative to the button label
   */
  loaderPosition: PropTypes.oneOf(['left', 'right', 'center']),
  /**
   * ? Specify whether the Button is currently selected. Only applies to the Ghost variant.
   */
  isSelected: PropTypes.bool
  }