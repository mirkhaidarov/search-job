import { ColorPalette } from './color-palette'

export interface Theme {
    name: string
    primaryColor: string
    secondaryColor: string
    btnBackground: string
    btnBackgroundHover: string
    colors: ColorPalette
}
