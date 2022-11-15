import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

export const Statistics = () => {

    const list = [
        { title: 'Projects', count: 35 },
        { title: 'Hours Coding', count: 892 },
        { title: 'Hours Working', count: 350 },
    ]

    return (
        <Flex
            w='100%'
            justifyContent='center'
            alignItems='center'
            gap={{
                base: '2rem',
                md: '5rem'
            }}
        >
            {list.map((item) => {
                return (
                    <Flex
                        w={{
                            base: '6rem',
                            md: '8rem'
                        }}
                        h={{
                            base: '6rem',
                            md: '8rem'
                        }}
                        borderRadius='20rem'
                        flexDir='column'
                        justifyContent='center'
                        alignItems='center'
                        border='3px solid #6A2F99'
                    >
                        <Text
                            fontSize={{
                                base: '1.6rem',
                                md: '1.8rem'
                            }}
                            fontWeight='bold'
                        >
                            {item.count}
                        </Text>
                        <Text
                            color='#A7A7A7'
                            fontSize={{
                                base: '.6rem',
                                md: '.8rem'
                            }}
                        >
                            {item.title}
                        </Text>
                    </Flex>
                )
            })}
        </Flex>
    )
}
