import { Box, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'

import { CgEditBlackPoint } from 'react-icons/cg'

export const Fourth = () => {
    return (
        <>
            <Box>
                <Text
                    fontSize='1.5rem'
                    fontWeight='bold'
                >
                    October 2021
                </Text>
                <Text
                    color='#9E9E9E'
                    fontWeight='semibold'
                >
                    Web-Developer For West NYC
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
                        Utilized React to implement new designs to the landing page
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
                        Created a responsive interface using Bootstrap for company’s eCommerce website that served over 300+ users daily
                    </Text>
                </Flex>
            </VStack>
        </>
    )
}
