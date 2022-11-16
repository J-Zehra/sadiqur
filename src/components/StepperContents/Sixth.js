import { Box, Text } from '@chakra-ui/react'
import React from 'react'

export const Sixth = () => {
    return (
        <>
            <Box>
                <Text
                    fontSize='1.5rem'
                    fontWeight='bold'
                >
                    2022 - Present
                </Text>
                <Text
                    color='#9E9E9E'
                    fontWeight='semibold'
                >
                    In Progress
                </Text>
            </Box>
            <Box>
                <Text
                    color='#9E9E9E'
                    fontWeight='normal'
                >
                    - Maybe add something creative or something unique to this bullet point of the timeline
                </Text>
            </Box>
        </>
    )
}
