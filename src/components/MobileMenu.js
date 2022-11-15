import { Box, Flex } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useContext } from 'react'

import { RiMenuFoldFill, RiMenuUnfoldFill } from 'react-icons/ri'
import { ApplicationContext } from '../context/AppContext';

export const MobileMenu = () => {

    const { toggled, setToggled } = useContext(ApplicationContext);

    return (
        <Flex
            fontSize='1.6rem'
            pos='relative'
            justifyContent='center'
            alignItems='center'
            color={toggled ? 'palette.primary' : 'palette.secondary'}
        >
            <AnimatePresence exitBeforeEnter>
                {toggled ? (
                    <Flex
                        justifyContent='center'
                        alignItems='center'
                        gap='1.2rem'
                    >
                        <Flex
                            as={motion.div}
                            layoutId='menu'
                            key='menu'
                            onClick={() => setToggled(!toggled)}
                            justifyContent='center'
                            alignItems='center'
                            gap='1.2rem'
                            initial={{
                                opacity: 1
                            }}
                            exit={{
                                opacity: 0,
                                scale: 1.2
                            }}
                            whileHover={{
                                scale: 1.1
                            }}
                        >
                            <RiMenuFoldFill />
                        </Flex>
                    </Flex>
                ) : (
                    <Flex
                        justifyContent='center'
                        alignItems='center'
                        gap='1.2rem'
                    >
                        <Box
                            as={motion.div}
                            layoutId='menu'
                            key='menu2'
                            onClick={() => setToggled(!toggled)}
                            initial={{
                                opacity: 1
                            }}
                            exit={{
                                opacity: 0,
                                scale: 1.2
                            }}
                            whileHover={{
                                scale: 1.1
                            }}

                        >
                            <RiMenuUnfoldFill />
                        </Box>
                    </Flex>
                )}
            </AnimatePresence>
            {/* <MenuContainer /> */}
        </Flex>
    )
}
