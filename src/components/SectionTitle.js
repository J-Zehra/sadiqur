import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Border from '../assets/Border2.svg'

export const SectionTitle = ({ title }) => {
    return (
        <Flex
            flexDir='column'
            justifyContent='center'
            alignItems='center'
            gap='.3rem'
        >
            <Image
                src={Border}
            />
            <Text
                fontSize='1.2rem'
                fontWeight='bold'
            >
                { title }
            </Text>
        </Flex>
    )
}
