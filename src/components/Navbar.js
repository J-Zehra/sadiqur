import { Box, Flex, Image, Link, useMediaQuery } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { ApplicationContext } from '../context/AppContext'

import Logo from '../assets/Logo.png'
import { MobileMenu } from './MobileMenu'
import { motion } from 'framer-motion'
import { item } from '../miscellaneous/motionVariants'

export const Navbar = () => {

    // GET THE STATES FROM THE CONTEXT
    const { scrolled, activeNav } = useContext(ApplicationContext)

    // TRACK SCREEN SIZE TO ADJUST THE NAV APPEARANCE
    const [isSmallerThan850] = useMediaQuery('(max-width: 850px)')

    // INITIALIZE THE ARRAY OF NAV LINKS TO BE MAPPED
    const navLinks = [
        { link: '#home', label: 'Home' },
        { link: '#about', label: 'About' },
        { link: '#portfolio', label: 'Portfolio' },
    ]

    const activeNavStyle = {
        color: 'palette.accent',
        fontWeight: 'bold',
    }

    return (
        <Box
            w='100%'
            h='5rem'
            pos='fixed'
            zIndex='999'
        >
            <Flex
                w={{
                    base: '95%',
                    sm: '90%',
                    lg: '85%',
                    xl: '80%',
                    '2xl': '75%',
                }}
                h='100%'
                margin='auto'
                alignItems='center'
                justifyContent='space-between'
            >
                {/* LOGO */}
                <Link
                    href='#home'
                >
                    <Image
                        transition='all .3s ease'
                        w={scrolled ? '2.4rem' : '2.5rem'}
                        src={Logo}
                    />
                </Link>

                {/* NAVIGATION LINKS */}
                {isSmallerThan850 ? (
                    <MobileMenu />
                ) : (
                    <Flex
                        alignItems='center'
                        gap='3rem'
                    >
                        {navLinks.map((nav, index) => {
                            return (
                                <Link
                                    display='flex'
                                    justifyContent='center'
                                    key={index}
                                    href={nav.link}
                                    transition='all .3s ease'
                                    fontSize={scrolled && '.95rem'}
                                    pos='relative'
                                    {...activeNav === index && activeNavStyle}
                                    _hover={{
                                        color: 'palette.accent'
                                    }}

                                    as={motion.a}
                                    variants={item}
                                >
                                    {nav.label}
                                    {activeNav === index && (
                                        <Box
                                            pos='absolute'
                                            bottom='-.6rem'
                                            w='.5rem'
                                            h='.5rem'
                                            borderRadius='50%'
                                            bg='palette.accent'
                                            as={motion.div}
                                            layoutId
                                        />
                                    )}
                                </Link>
                            )
                        })}
                    </Flex>
                )}
            </Flex>
        </Box>
    )
}
