import type { MediaFit } from "./Main"

export interface Themes {
    name: string
    default?: boolean
    font: any
    colors: any
    border?: any
}

export interface Styles {
    name: string
    layers?: ["background", "slide", "overlays"][]
    background?: string
    backgroundImage?: string
    clearStyleBackgroundOnText?: boolean
    fit?: MediaFit | null
    resolution?: Resolution
    cropping?: Cropping
    lines?: number
    maxAutoFontSize?: number
    template?: string // slide
    templateScripture?: string
    metadataDivider?: string
    displayMetadata?: string
    metadataTemplate?: string
    messageTemplate?: string
}

export interface Resolution {
    width: number
    height: number
}
export interface Cropping {
    top: number
    right: number
    bottom: number
    left: number
}

export interface Dictionary {
    [key: string]: {
        [key: string]: string
    }
}
