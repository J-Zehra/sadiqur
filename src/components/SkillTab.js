import { Box, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Tooltip, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'

import { FaReact } from 'react-icons/fa'
import { BsBootstrapFill } from 'react-icons/bs'
import { FaWordpress } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'

import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { FaSass } from 'react-icons/fa'
import { DiJavascript } from 'react-icons/di'
import { FaPython } from 'react-icons/fa'

import { DiVisualstudio } from 'react-icons/di'
import { AiFillGithub } from 'react-icons/ai'
import { FiFigma } from 'react-icons/fi'
import { SiMicrosoftoffice } from 'react-icons/si'
import { FaShopify } from 'react-icons/fa'
import { SiAdobecreativecloud } from 'react-icons/si'
import { SiTensorflow } from 'react-icons/si'
import { motion } from 'framer-motion'
import { container2, item4 } from '../miscellaneous/motionVariants'

export const SkillTab = () => {

    const tabList = [
        { title: 'Frameworks' },
        { title: 'Languages' },
        { title: 'Software' }
    ]

    const frameworkList = [
        { title: 'ReactJS', icon: <FaReact /> },
        { title: 'Bootstrap', icon: <BsBootstrapFill /> },
        { title: 'Wordpress', icon: <FaWordpress /> },
        { title: 'NodeJS', icon: <FaNodeJs /> },
        { title: 'Tailwind', icon: <SiTailwindcss /> },
        { title: 'MongoDB', icon: <SiMongodb /> },
    ]

    const languageList = [
        { title: 'HTML', icon: <AiFillHtml5 /> },
        { title: 'CSS', icon: <DiCss3 /> },
        { title: 'SASS', icon: <FaSass /> },
        { title: 'Javascript', icon: <DiJavascript /> },
        { title: 'Python', icon: <FaPython /> },
    ]

    const softwareList = [
        { title: 'Visual Studio Code', icon: <DiVisualstudio /> },
        { title: 'Github', icon: <AiFillGithub /> },
        { title: 'Figma', icon: <FiFigma /> },
        { title: 'MS Office Suite', icon: <SiMicrosoftoffice /> },
        { title: 'Shopify', icon: <FaShopify /> },
        { title: 'Abode Creative Cloud', icon: <SiAdobecreativecloud /> },
        { title: 'Tensorflow', icon: <SiTensorflow /> },
    ]

    return (
        <Tabs
            variant='soft-rounded'
            w='100%'
            align='center'
            minH='20rem'
            isLazy
        >
            <TabList>
                {tabList.map((tab) => {
                    return (
                        <Tab
                            color='#929292'
                            _selected={{
                                color: 'white',
                                bg: '#9604C8'
                            }}
                        >
                            {tab.title}
                        </Tab>
                    )
                })}
            </TabList>
            <TabPanels
                marginTop='2rem'
            >
                <TabPanel>
                    <Wrap
                        justify='center'
                        spacing='2rem'
                        p='2rem'
                        w={{
                            base: '100%',
                            md: '60%',
                            lg: '50%'
                        }}

                        as={motion.div}
                        variants={container2}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: true }}
                    >
                        {frameworkList.map((framework) => {
                            return (
                                <WrapItem>
                                    <Tooltip
                                        hasArrow
                                        label={framework.title}
                                        borderRadius='.3rem'
                                        p='.5rem 1rem'
                                    >
                                        <Flex
                                            justifyContent='center'
                                            alignItems='center'
                                            p='1.5rem'
                                            borderRadius='20rem'
                                            bg='#181818'
                                            boxShadow='3px 3px 20px rgba(0, 0, 0, .5)'

                                            as={motion.div}
                                            variants={item4}
                                            whileHover={{
                                                scale: 1.1
                                            }}
                                        >
                                            <Box
                                                fontSize='2.5rem'
                                                color='whitesmoke'
                                            >
                                                {framework.icon}
                                            </Box>
                                        </Flex>
                                    </Tooltip>
                                </WrapItem>
                            )
                        })}
                    </Wrap>
                </TabPanel>
                <TabPanel>
                    <Wrap
                        justify='center'
                        spacing='2rem'
                        w={{
                            base: '100%',
                            md: '60%',
                            lg: '50%'
                        }}
                        p='2rem'

                        as={motion.div}
                        variants={container2}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: true }}
                    >
                        {languageList.map((language) => {
                            return (
                                <WrapItem>
                                    <Tooltip
                                        hasArrow
                                        label={language.title}
                                        borderRadius='.3rem'
                                        p='.5rem 1rem'
                                    >
                                        <Flex
                                            justifyContent='center'
                                            alignItems='center'
                                            p='1.5rem'
                                            borderRadius='20rem'
                                            bg='#181818'
                                            boxShadow='3px 3px 20px rgba(0, 0, 0, .5)'

                                            as={motion.div}
                                            variants={item4}
                                            whileHover={{
                                                scale: 1.1
                                            }}
                                        >
                                            <Box
                                                fontSize='2.5rem'
                                                color='whitesmoke'
                                            >
                                                {language.icon}
                                            </Box>
                                        </Flex>
                                    </Tooltip>
                                </WrapItem>
                            )
                        })}
                    </Wrap>
                </TabPanel>
                <TabPanel>
                    <Wrap
                        justify='center'
                        spacing='2rem'
                        w={{
                            base: '100%',
                            md: '60%',
                            lg: '50%'
                        }}
                        p='2rem'

                        as={motion.div}
                        variants={container2}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: true }}
                    >
                        {softwareList.map((software) => {
                            return (
                                <WrapItem>
                                    <Tooltip
                                        hasArrow
                                        label={software.title}
                                        borderRadius='.3rem'
                                        p='.5rem 1rem'
                                    >
                                        <Flex
                                            justifyContent='center'
                                            alignItems='center'
                                            p='1.5rem'
                                            borderRadius='20rem'
                                            bg='#181818'
                                            boxShadow='3px 3px 20px rgba(0, 0, 0, .5)'

                                            as={motion.div}
                                            variants={item4}
                                            whileHover={{
                                                scale: 1.1
                                            }}
                                        >
                                            <Box
                                                fontSize='2.5rem'
                                                color='whitesmoke'
                                            >
                                                {software.icon}
                                            </Box>
                                        </Flex>
                                    </Tooltip>
                                </WrapItem>
                            )
                        })}
                    </Wrap>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}
