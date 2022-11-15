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
            h={{
                md: '100vh'
            }}
            paddingBlock={{
                base: '10rem',
                md: '0'
            }}
            justifyContent='center'
            alignItems='center'
            ref={ref}
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
            >
                {/* LEFT */}
                <Flex
                    flexDir='column'
                    alignItems={{
                        base: 'center',
                        md: 'start'
                    }}
                >
                    <Text
                        as='h5'
                        textAlign={{
                            base: 'center',
                            md: 'start'
                        }}
                    >
                        Hi, I am Sadiqur Sakib,
                    </Text>
                    <Text
                        as='h1'
                        textAlign={{
                            base: 'center',
                            md: 'start'
                        }}
                    >
                        Aspiring Developer.
                    </Text>
                    <Text
                        width={{
                            base: '100%',
                            md: '70%'
                        }}
                        as='h5'
                        fontWeight='semibold'
                        textAlign={{
                            base: 'center',
                            md: 'start'
                        }}
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
