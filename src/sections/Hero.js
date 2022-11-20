import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion';
import React, { useContext, useEffect, useRef } from 'react'
import { HeroButton } from '../components/HeroButton';
import { ApplicationContext } from '../context/AppContext';
import { allBreakpoints } from '../miscellaneous/breakpoints';
import ProfilePic from '../assets/ProfilePic.webp'
import { container, item2 } from '../miscellaneous/motionVariants';

import Typewriter from 'typewriter-effect'

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
            justifyContent='center'
            alignItems='center'
            ref={ref}
            h={{
                md: '100vh'
            }}
            paddingBlock={{
                base: '10rem',
                md: '0'
            }}
        >
            <Flex
                w={allBreakpoints}
                margin='auto'
                justifyContent='space-between'
                alignItems='center'
                flexDir={{
                    base: 'column',
                    md: 'row'
                }}
                as={motion.div}
                variants={container}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
            >
                {/* LEFT */}
                <Flex
                    flexDir='column'
                    alignItems='start'
                >
                    <Text
                        textAlign='start'

                        as={motion.h5}
                        variants={item2}

                    >
                        Hi, I am Sadiqur Sakib,
                    </Text>
                    <Text
                        textAlign='start'

                        as={motion.h1}
                        variants={item2}
                    >
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString('Aspiring Developer.')
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .typeString('College Student.')
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .typeString('Web Developer.')
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .start();
                            }}
                            options={{
                                autoStart: true,
                                loop: true,
                                cursor: '|',
                                //cursorClassName:'cursor'
                            }}
                        />
                    </Text>
                    <Text
                        fontWeight='semibold'
                        textAlign='start'
                        fontSize='1.2rem'
                        width={{
                            base: '100%',
                            md: '70%'
                        }}

                        as={motion.h5}
                        variants={item2}
                    >
                        CUNY Baruch College Undergraduate Student Majoring In Computer Information Systems Located In New York City.
                    </Text>
                    <Box
                        as={motion.div}
                        variants={item2}
                    >
                        <HeroButton />
                    </Box>
                </Flex>

                {/* RIGHT */}
                <Box
                    as={motion.button}
                    variants={item2}
                >
                    <Image
                        src={ProfilePic}
                        w='40rem'
                        h='auto'
                        alt='profile picture'
                    />
                </Box>
            </Flex>
        </Flex>
    )
}
