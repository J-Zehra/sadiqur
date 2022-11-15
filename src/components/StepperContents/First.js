import { Box, Text } from '@chakra-ui/react'
import React from 'react'

export const First = () => {
    return (
        <>
            <Box>
                <Text
                    fontSize='1.5rem'
                    fontWeight='bold'
                >
                    May 2020
                </Text>
                <Text
                    color='#9E9E9E'
                    fontWeight='semibold'
                >
                    Graduated from Francis Lewis High School
                </Text>
            </Box>
            <Text
                color='#9E9E9E'
                fontWeight='normal'
            >
                Description here...
            </Text>
        </>
    )
}
