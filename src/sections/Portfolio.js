import { AspectRatio, Box, Flex, Image, Wrap, WrapItem } from '@chakra-ui/react'
import { useInView } from 'framer-motion';
import React, { useContext, useEffect, useRef } from 'react'
import { SectionTitle } from '../components/SectionTitle';
import { ApplicationContext } from '../context/AppContext';
import { allBreakpoints } from '../miscellaneous/breakpoints';

import Project1 from '../assets/projects/SadiqurFC_page.png'
import Project2 from '../assets/projects/krypt .png'
import Project3 from '../assets/projects/ASCEND.png'
import Project4 from '../assets/projects/AlanAI.jpeg'
import Project5 from '../assets/projects/Portfolio.png'
import Project6 from '../assets/projects/hack.png'
import Project7 from '../assets/projects/Candy.png'
import Project8 from '../assets/projects/Price.png'
import Project9 from '../assets/projects/robotics.png'
import Project10 from '../assets/projects/snake.png'



export const Portfolio = () => {

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
            setActiveNav(3);
        }
    }, [isInView, setActiveNav])

    const projectList = [
        { title: 'Sadiqur’s Fitness Committee', image: Project1 },
        { title: 'KRYPT', image: Project2 },
        { title: 'ASCEND BARUCH', image: Project3 },
        { title: 'ALAN AI VIRTUAL ASSISSTANT ', image: Project4 },
        { title: 'PREVIOUS PORTFOLIO', image: Project5 },
        { title: 'ASCEND HACKATHON', image: Project6 },
        { title: 'MEUSEUM OF CANDY', image: Project7 },
        { title: 'PRICE PANEL', image: Project8 },
        { title: 'FTC ROBOTICS', image: Project9 },
        { title: 'SNAKE GAME', image: Project10 },
    ]

    return (
        <Flex
            id='portfolio'
            paddingBlock='5rem'
            justifyContent='center'
            alignItems='center'
            ref={ref}
            bg='#181818'
        >
            <Flex
                w={allBreakpoints}
                margin='auto'
                justifyContent='center'
                alignItems='center'
                flexDir='column'
                gap='8rem'
            >
                <SectionTitle title={'Portfolio'} />

                <Wrap
                    justify='center'
                    spacing='1.5rem'
                >
                    {projectList.map((project) => {
                        return (
                            <WrapItem
                                pos='relative'
                                borderRadius='.4rem'
                            >
                                <AspectRatio
                                    ratio={16 / 9}
                                    w={{
                                        base: '90vw',
                                        md: '26rem'
                                    }}
                                >
                                    <Image
                                        src={project.image}
                                        objectFit='cover'
                                        w='100%'
                                        borderRadius='.4rem'
                                    />
                                </AspectRatio>

                                <Box
                                    pos='absolute'
                                    w='100%'
                                    h='100%'
                                    bg='#BB07FA'
                                    top='0'
                                    right='0'
                                    left='0'
                                    bottom='0'
                                    opacity='0'
                                    transition='all .3s ease'
                                    borderRadius='.4rem'

                                    _hover={{
                                        opacity: .6
                                    }}
                                >

                                </Box>
                            </WrapItem>
                        )
                    })}
                </Wrap>
            </Flex>
        </Flex>
    )
}
