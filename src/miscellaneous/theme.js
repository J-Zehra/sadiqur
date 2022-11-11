
import { extendTheme } from "@chakra-ui/react"

const colors = {
    palette: {
        primary: '#191919',
        secondary: '#EDEDED',
        tertiary: '#EDEDED',
        accent: '#DB8DFF'
    }
}

const fonts = {
    body: `'Nunito', sans-serif`
}

const styles = {
    global: {
        html: {
            scrollBehavior: 'smooth',
            overflowX: 'hidden', 
        },
        body: {
            bg: 'palette.primary',
            color: 'palette.tertiary',
        },
        _placeholder: {
            color: 'rgba(38, 50, 56, .6)',
            fontSize: '.9rem'
        },
        h1: {
            fontSize: '4rem',
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #C41DFF, #DC8AF9)',
            backgroundClip: 'text',
        },
        h5:{
            background: 'linear-gradient(to right, #BBBBBB, white)',
            backgroundClip: 'text',
        }
    }
}

export const theme = extendTheme({ colors, fonts, styles });