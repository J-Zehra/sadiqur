import { Flex, Link } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import { useContext } from 'react'
import { ApplicationContext } from '../context/AppContext'

export const MenuContainer = () => {

    const { toggled, setToggled } = useContext(ApplicationContext);

    const navLinks = [
        { link: '#hero', label: 'Home' },
        { link: '#about', label: 'About' },
        { link: '#skills', label: 'Skills' },
        { link: '#portfolio', label: 'Portfolio' },
    ]

    return (
        <Flex
            h='100vh'
            w='100%'
            pos='fixed'
            bg='palette.secondary'
            justifyContent='center'
            alignItems='center'
            gap='1.5rem'
            zIndex={2}
            flexDir='column'
            as={motion.div}
            initial={{
                x: '100%'
            }}
            animate={{
                x: toggled ? 0 : '100%',
                opacity: toggled ? 1 : 0,
                transition:{
                    duration: .3
                }
            }}
        >
            {navLinks.map((item, index) => {
                return (
                    <Link
                        href={item.link}
                        onClick={() => setToggled(!toggled)}
                        color='palette.primary'
                        fontWeight='semibold'
                        key={index}
                    >
                        {item.label}
                    </Link>
                )
            })}
        </Flex>
    )
}
