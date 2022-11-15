import { Flex } from '@chakra-ui/react'
import React from 'react'

import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'

export const Socials = () => {
    return (
        <Flex
            w='100%'
            justifyContent='center'
            alignItems='center'
            fontSize='1.5rem'
            gap='2rem'
        >
            <AiFillGithub/>
            <AiFillLinkedin/>
        </Flex>
    )
}
