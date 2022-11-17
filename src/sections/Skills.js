import { Box, Flex, Text, Wrap, WrapItem } from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion';
import React, { useContext, useEffect, useRef } from 'react'
import { SectionTitle } from '../components/SectionTitle';
import { ApplicationContext } from '../context/AppContext';
import { allBreakpoints } from '../miscellaneous/breakpoints';

import { AiOutlineLaptop } from 'react-icons/ai'
import { AiOutlineBulb } from 'react-icons/ai'
import { FaRegHandPointer } from 'react-icons/fa'
import { BiMobileVibration } from 'react-icons/bi'
import { SkillTab } from '../components/SkillTab';
import { container, item } from '../miscellaneous/motionVariants';

export const Skills = () => {

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
            setActiveNav(2);
        }
    }, [isInView, setActiveNav])

    const skillList = [
        { title: 'Programming', icon: <AiOutlineLaptop />, description: 'Strong understanding of multiple programming languages such as Python, C++, Java, etc.' },
        { title: 'Creative', icon: <AiOutlineBulb />, description: 'Every project should be visually and functionally unique' },
        { title: 'Interactive', icon: <FaRegHandPointer />, description: 'A website should do more than just present information. It should come to life' },
        { title: 'Responsive', icon: <BiMobileVibration />, description: 'Create and deliver responsive applications across multiple devices without quality loss' },
    ]

    return (
        <Flex
            id='skills'
            justifyContent='center'
            alignItems='center'
            ref={ref}
            paddingBlock='5rem'
        >
            <Flex
                w={allBreakpoints}
                margin='auto'
                flexDir='column'
                justifyContent='center'
                alignItems='center'
                gap='8rem'
            >
                <SectionTitle title={'Skills'} />

                <Wrap
                    w='100%'
                    justify='center'
                    spacing='3rem'

                    as={motion.div}
                    variants={container}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true }}
                >
                    {skillList.map((skill) => {
                        return (
                            <WrapItem>
                                <Flex
                                    flexDir='column'
                                    alignItems='center'
                                    justifyContent='center'
                                    w='20rem'
                                    gap='1rem'

                                    as={motion.div}
                                    variants={item}
                                >
                                    <Box
                                        fontSize='3rem'
                                        bg='#9604C8'
                                        p='2rem'
                                        borderRadius='20rem'
                                    >
                                        {skill.icon}
                                    </Box>
                                    <Text
                                        fontSize='1.5rem'
                                        fontWeight='bold'
                                    >
                                        {skill.title}
                                    </Text>
                                    <Text
                                        textAlign='center'
                                        fontWeight='normal'
                                        fontSize='.95rem'
                                        as='h5'
                                    >
                                        {skill.description}
                                    </Text>
                                </Flex>
                            </WrapItem>
                        )
                    })}
                </Wrap>

                <SkillTab />

            </Flex>
        </Flex>
    )
}
