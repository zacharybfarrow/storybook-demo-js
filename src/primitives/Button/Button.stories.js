import {Button} from './Button'
import { action } from '@storybook/addon-actions'

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
        kind: 'SOLID',
        variant: 'ACTION',
        onClick: action('onClick'),
        children: 'Button',
    }
}

export const Outline = {
    args: {
        kind: 'OUTLINE',
        variant: 'ACTION',
        onClick: action('onClick'),
        children: 'Button',
    }
}

export const Ghost = {
    args: {
        kind: 'GHOST',
        variant: 'ACTION',
        onClick: action('onClick'),
        children: 'Button',
    }
}

export const Tinted = {
    args: {
        kind: 'TINTED',
        variant: 'ACTION',
        onClick: action('onClick'),
        children: 'Button',
    }
}