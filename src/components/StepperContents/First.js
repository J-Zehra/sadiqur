import { Box, Flex, Text, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import { CgEditBlackPoint } from 'react-icons/cg'

export const First = () => {
    return (
        <>
            <Box
                as={motion.div}
                initial={{
                    opacity: 0,
                    x: -50
                }}
                animate={{
                    opacity: 1,
                    x: 0,
                }}
            >
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
            <VStack
                spacing='1rem'
                align='start'

                as={motion.div}
                initial={{
                    opacity: 0,
                    x: -50
                }}
                animate={{
                    opacity: 1,
                    x: 0
                }}
            >
                <Flex
                    alignItems='start'
                    justifyContent='start'
                    gap='1rem'
                >
                    <Box
                        fontSize='1.5rem'
                    >
                        <CgEditBlackPoint />
                    </Box>
                    <Text
                        color='#9E9E9E'
                        fontWeight='normal'
                    >
                        Focus on computer science and robotics
                    </Text>
                </Flex>
                <Flex
                    alignItems='start'
                    justifyContent='start'
                    gap='1rem'
                >
                    <Box
                        fontSize='1.5rem'
                    >
                        <CgEditBlackPoint />
                    </Box>
                    <Text
                        color='#9E9E9E'
                        fontWeight='normal'
                    >
                        Co-Founded Game Design and Development Club
                    </Text>
                </Flex>
                <Flex
                    alignItems='start'
                    justifyContent='start'
                    gap='1rem'
                >
                    <Box
                        fontSize='1.5rem'
                    >
                        <CgEditBlackPoint />
                    </Box>
                    <Text
                        color='#9E9E9E'
                        fontWeight='normal'
                    >
                        Team Captain of  FTC & FRC Varsity Robotics Team
                    </Text>
                </Flex>
            </VStack>
        </>
    )
}
