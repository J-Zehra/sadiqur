import { Box, Flex, Text, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import { CgEditBlackPoint } from 'react-icons/cg'

export const Third = () => {
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
                    March 2021
                </Text>
                <Text
                    color='#9E9E9E'
                    fontWeight='semibold'
                >
                    Web-Development Boot Camp
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
                    x: 0,
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
                        Learned Full-Stack web development
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
                        Started Developing Projects with newfound knowledge
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
                        Continuously learning to utilize new frameworks, libraries, languages, and software and implementing them into projects
                    </Text>
                </Flex>
            </VStack>
        </>
    )
}
