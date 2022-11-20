import { Box, Image } from '@chakra-ui/react'
import React from 'react'

import { BgElement } from '../assets/BgElement'

export const BackgroundElement = () => {
    return (
        <Box
            pos='absolute'
            right='0'
            zIndex='-1'
            w='25%'
            h='100vh'
            top='0'
            bottom='0'
            display={{
                base: 'none',
                md: 'block'
            }}
        >
            <BgElement />
        </Box>
    )
}
