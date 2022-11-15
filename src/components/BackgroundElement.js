import { Image } from '@chakra-ui/react'
import React from 'react'

import BgElement from '../assets/BackgroundElement.png'

export const BackgroundElement = () => {
    return (
        <Image
            pos='absolute'
            right='0'
            zIndex='-1'
            src={BgElement}
            w='30%'
            h='100vh'
            display={{
                base: 'none',
                md: 'block'
            }}
        />
    )
}
