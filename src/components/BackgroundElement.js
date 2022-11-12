import { Image } from '@chakra-ui/react'
import React from 'react'

import BgElement from '../assets/BackgroundElement.png'

export const BackgroundElement = () => {
    return (
        // <Box
        //     pos='absolute'
        //     right='0'
        //     top='6%'
        //     transform='rotate(30deg)'
        //     width='50%'
        //     height='50vh'
        //     zIndex='-1'
        //     bg='linear-gradient(to top right, #FA00FF, rgba(95, 3, 128, 28))'
        // >
            
        // </Box>
        <Image
            pos='absolute'
            right='0'
            zIndex='-1'
            src={BgElement}
            w='30%'
            h='100vh'
        />
    )
}
