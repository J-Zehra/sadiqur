import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { AboutButton } from './AboutButton'

export const RightContents = () => {
    return (
        <Flex
            flexDir='column'
            flex={1}
            zIndex='1'
        >
            <Text
                as='h1'
            >
                Sadiqur Sakib.
            </Text>
            <Text
                width='100%'
                as='h5'
                fontWeight='semibold'
            >
                I have been programming since the start of high school, with approxmiately 2 years of experience in web-development. My goal as a developer is to create autonomous applications that can improve quality of life and build a better society.
            </Text>
            <AboutButton />
        </Flex>
    )
}
