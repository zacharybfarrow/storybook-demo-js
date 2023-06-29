import {Button} from './Button'

// Metadata
export default {
    title: 'Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        
    }
}

// Stories

export const Solid = {
    args: {
        kind: 'SOLID'
    }
}

export const Outline = {
    args: {
        kind: 'OUTLINE'
    }
}

export const Ghost = {
    args: {
        kind: 'GHOST'
    }
}

export const Tinted = {
    args: {
        kind: 'TINTED'
    }
}