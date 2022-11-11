import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { useInView } from 'framer-motion';
import React, { useContext, useEffect, useRef } from 'react'
import { HeroButton } from '../components/HeroButton';
import { ApplicationContext } from '../context/AppContext';
import { allBreakpoints } from '../miscellaneous/breakpoints';
import ProfilePic from '../assets/ProfilePic.png'

export const Hero = () => {

    // GET THE STATES FROM THE CONTEXT
    const { setActiveNav } = useContext(ApplicationContext)

    // SET THE REF FOR THE ELEMENT TO TRACK
    const ref = useRef(null);
    const isInView = useInView(ref, {
        margin: '-50% 0px -50% 0px'
    });

    // SET THE ACTIVE NAV TO BE THE INDEX 0 WHEN THIS COMPONENT IS VISIBLE ON THE SCREEN
    useEffect(() => {
        if (isInView) {
            setActiveNav(0);
        }
    }, [isInView, setActiveNav])

    return (
        <Flex
            id='hero'
            h='100vh'
            justifyContent='center'
            alignItems='center'
            ref={ref}
        >
            <Flex
                w={allBreakpoints}
                margin='auto'
                justifyContent='space-between'
                alignItems='center'
            >
                {/* LEFT */}
                <Flex
                    flexDir='column'
                >
                    <Text
                        as='h5'
                    >
                        Hi, I am Sadiqur Sakib,
                    </Text>
                    <Text
                        as='h1'
                    >
                        Aspiring Developer.
                    </Text>
                    <Text
                        width='70%'
                        as='h5'
                        fontWeight='semibold'
                    >
                        CUNY Baruch College Undergraduate College Student Majoring In Computer Information Systems Located In New York City.
                    </Text>
                    <HeroButton/>
                </Flex>

                {/* RIGHT */}
                <Box>
                    <Image 
                        src={ProfilePic}
                        w='40rem'
                    />
                </Box>
            </Flex>
        </Flex>
    )
}
