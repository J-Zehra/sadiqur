import { Box, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { CgEditBlackPoint } from 'react-icons/cg'

export const Second = () => {
    return (
        <>
            <Box>
                <Text
                    fontSize='1.5rem'
                    fontWeight='bold'
                >
                    August 2020
                </Text>
                <Text
                    color='#9E9E9E'
                    fontWeight='semibold'
                >
                    Enrolled at CUNY Baruch College
                </Text>
            </Box>
            <VStack 
                spacing='1rem'
                align='start'
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
                        Majoring in Computer Information Systems and Minor in Art Graphics Design
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
                        Ascend Technology Committee Assistant Vice President
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
                        Taught Workshops in Web Design and Development
                    </Text>
                </Flex>
            </VStack>
        </>
    )
}
