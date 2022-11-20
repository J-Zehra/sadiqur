import { Box, Flex, Image, Link, useMediaQuery } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { ApplicationContext } from '../context/AppContext'

import Logo from '../assets/Logo.png'
import Logo2 from '../assets/logo2.png'
import { MobileMenu } from './MobileMenu'
import { motion } from 'framer-motion'
import { container, item } from '../miscellaneous/motionVariants'
import { allBreakpoints } from '../miscellaneous/breakpoints'

export const Navbar = () => {

    // GET THE STATES FROM THE CONTEXT
    const { scrolled, activeNav, toggled } = useContext(ApplicationContext)

    // TRACK SCREEN SIZE TO ADJUST THE NAV APPEARANCE
    const [isSmallerThan850] = useMediaQuery('(max-width: 850px)')

    // INITIALIZE THE ARRAY OF NAV LINKS TO BE MAPPED
    const navLinks = [
        { link: '#hero', label: 'Home' },
        { link: '#about', label: 'About' },
        { link: '#skills', label: 'Skills' },
        { link: '#portfolio', label: 'Portfolio' },
    ]

    const activeNavStyle = {
        color: 'palette.accent',
        fontWeight: 'bold',
    }

    return (
        <Box
            w='100%'
            transition='all .2s ease'
            h={scrolled ? '4.9rem' : '5rem'}
            pos='fixed'
            zIndex='100'
            backdropFilter={scrolled && 'blur(15px)'}
            boxShadow={scrolled && '0 0 10px rgba(0, 0, 0, .2)'}
        >
            <Flex
                w={allBreakpoints}
                h='100%'
                margin='auto'
                alignItems='center'
                justifyContent='space-between'

                as={motion.div}
                variants={container}
                initial='hidden'
                animate='show'
            >
                {/* LOGO */}
                <Link
                    href='#hero'
                    as={motion.a}
                    variants={item}
                >
                    <Image
                        transition='all .3s ease'
                        w={scrolled ? '5.9rem' : '6rem'}
                        src={toggled ? Logo2 : Logo}
                        alt='logo'
                    />
                </Link>

                {/* NAVIGATION LINKS */}
                {isSmallerThan850 ? (
                    <MobileMenu />
                ) : (
                    <>
                        <Flex
                            alignItems='center'
                            justifyContent='center'
                            gap='3rem'
                        >
                            {navLinks.map((nav, index) => {
                                return (
                                    <Link
                                        display='flex'
                                        justifyContent='center'
                                        alignItems='center'
                                        key={index}
                                        href={nav.link}
                                        transition='all .2s ease'
                                        fontSize={scrolled && '.99rem'}
                                        pos='relative'
                                        fontWeight='400'
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
                    </>
                )}
            </Flex>
        </Box>
    )
}
