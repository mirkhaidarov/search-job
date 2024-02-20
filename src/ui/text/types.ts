import type { ColorPalette } from '@search-types/color-palette'
import type { textVariantToStyleMap } from './text-variant-to-style-map'

export type TextVariant = keyof typeof textVariantToStyleMap

export type TextColor = keyof ColorPalette
