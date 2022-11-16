import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Lottie from 'react-lottie-player'
import processing_animation from '../../assets/processing_animation.json'

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
            <Flex
                w='100%'
                justifyContent='center'
                alignItems='center'
            >
                <Box
                    w='20rem'
                >
                    <Lottie
                        loop
                        animationData={processing_animation}
                        play
                    />
                </Box>
            </Flex>
        </>
    )
}
