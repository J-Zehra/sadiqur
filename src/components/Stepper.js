import { Box, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'

import { MdSchool } from 'react-icons/md'
import { FaSchool } from 'react-icons/fa'
import { AiFillCode } from 'react-icons/ai'
import { FaGlobe } from 'react-icons/fa'
import { BiLoaderCircle } from 'react-icons/bi'
import { First } from './StepperContents/First'


export const Stepper = () => {

    const [active, setActive] = useState(0)

    const iconList = [
        { key: "icon1", icon: <MdSchool />, content: <First/> },
        { key: "icon2", icon: <FaSchool /> },
        { key: "icon3", icon: <AiFillCode /> },
        { key: "icon4", icon: <FaGlobe /> },
        { key: "icon5", icon: <BiLoaderCircle /> },
    ]

    return (
        <Flex
            w='30rem'
            h='22rem'
            bg='#1A1A1A'
            pos='relative'
            justifyContent='start'
            alignItems='start'
            p='1.5rem 5rem'
            flexDir='column'
            gap='2rem'
            flex={1}
            borderRadius='.3rem'
        >
            <Flex
                h='100%'
                pos='absolute'
                left='0'
                top='0'
                justifyContent='center'
                gap='2rem'
                flexDir='column'
                zIndex='1'
            >
                <Box
                    pos='absolute'
                    top='0'
                    left='1.2rem'
                    h='100%'
                    w='.1rem'
                    bg='#8D8D8D'
                    zIndex='-1'
                    opacity='.5'
                >

                </Box>
                {iconList.map((list, index) => {
                    return (
                        <Flex
                            key={list.key}
                            w='2.5rem'
                            h='2.5rem'
                            borderRadius='20rem'
                            bg={active === index ? '#AE3BD7' : '#1A1A1A'}
                            border={active !== index && '1px solid #8D8D8D'}
                            justifyContent='center'
                            alignItems='center'
                            onClick={() => setActive(index)}
                            color={active === index ? 'white' : '#8D8D8D'}
                            fontSize='1.1rem'
                        >
                            {list.icon}
                        </Flex>
                    )
                })}
            </Flex>
            { iconList[active].content }
        </Flex>
    )
}
