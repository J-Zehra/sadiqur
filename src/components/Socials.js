import { Flex, Link, Tooltip } from '@chakra-ui/react'
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
            <Tooltip
                hasArrow
                label='Github'
            >
                <Link
                    target='_blank'
                    href='https://github.com/sadiqurs'
                >
                    <AiFillGithub />
                </Link>
            </Tooltip>
            <Tooltip
                hasArrow
                label='Linkedin'
            >
                <Link
                    target='_blank'
                    href='https://www.linkedin.com/mwlite/in/sadiqur-sakib-550106209'
                >
                    <AiFillLinkedin />
                </Link>
            </Tooltip>
        </Flex>
    )
}
