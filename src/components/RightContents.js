import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { AboutButton } from './AboutButton'

export const RightContents = () => {
    return (
        <Flex
            flexDir='column'
            flex={1}
            zIndex='1'
            justifyContent='center'
            alignItems={{
                base: 'center',
                md: 'start'
            }}
        >
            <Text
                as='h1'
                textAlign={{
                    base: 'center',
                    md: 'start'
                }}
            >
                Sadiqur Sakib.
            </Text>
            <Text
                width='100%'
                as='h5'
                fontWeight='semibold'
                textAlign={{
                    base: 'center',
                    md: 'start'
                }}
            >
                I have been programming since the start of high school, with approxmiately 2 years of experience in web-development. My goal as a developer is to create autonomous applications that can improve quality of life and build a better society.
            </Text>
            <AboutButton />
        </Flex >
    )
}
