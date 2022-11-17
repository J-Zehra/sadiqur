import { Box, Flex, Text, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import { CgEditBlackPoint } from 'react-icons/cg'

export const Fifth = () => {
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
                    May 2022
                </Text>
                <Text
                    color='#9E9E9E'
                    fontWeight='semibold'
                >
                    Front-end Intern for Atlanta Hawks Basketball Strategy and Analytics Department
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
                        Front-end Intern for Atlanta Hawks Basketball Strategy and Analytics Department
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
                        Developed a front-end API to perform CRUD operations on AWS S3 buckets for data management
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
                        Redesigned various front-end components to improve responsiveness and meet modern designs
                    </Text>
                </Flex>
            </VStack>
        </>
    )
}
