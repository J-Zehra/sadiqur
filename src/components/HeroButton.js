import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'

import { BiRightArrowCircle } from 'react-icons/bi'

export const HeroButton = () => {
    return (
        <Button
            bg='linear-gradient(to right, #C41DFF, #C41DFF, #DC8AF9)'
            borderRadius='20rem'
            width='15rem'
            marginTop='1.5rem'
            p='2rem 1rem'
            _hover={{}}
            pos='relative'
            _active={{}}
            as='a'
            href='#contact'
            leftIcon={
                <Box
                    fontSize='3.5rem'
                    color='white'
                    pos='absolute'
                    left='.5rem'
                    top='50%'
                    transform='translate(0, -50%)'
                >
                    <BiRightArrowCircle/>
                </Box>
            }
        >
            <Text
                color='white'
                fontWeight='bold'
                fontSize='1.2rem'
                marginLeft='1.2rem'
            >
                Contact Me
            </Text>
        </Button>
    )
}
