import { Flex, useDisclosure, Wrap } from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { SectionTitle } from '../components/SectionTitle';
import { ApplicationContext } from '../context/AppContext';
import { allBreakpoints } from '../miscellaneous/breakpoints';

import Project1 from '../assets/projects/SadiqurFC_Page.webp'
import Project2 from '../assets/projects/krypt.webp'
import Project3 from '../assets/projects/ASCEND.webp'
import Project4 from '../assets/projects/AlanAI.webp'
import Project5 from '../assets/projects/Portfolio.webp'
import Project6 from '../assets/projects/hack.webp'
import Project7 from '../assets/projects/Candy.webp'
import Project8 from '../assets/projects/Price.webp'
import Project9 from '../assets/projects/robotics.webp'
import Project10 from '../assets/projects/snake.webp'
import { ProjectModal } from '../components/ProjectModal';

import { container } from '../miscellaneous/motionVariants'
import { ProjectCard } from '../components/ProjectCard';

export const Portfolio = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [modalData, setModalData] = useState({});


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
        {
            title: 'Sadiqur’s Fitness Committee',
            image: Project1,
            description: "Created a Fitness Webpage using React and Material UI that displays a variety of exercises for users. The application features gifs of how to perform the exercise, YouTube videos to get a better demonstrating or understanding of the exercise, ability to search any exercise or search what muscle the user wants to exercise is given a variety of exercise options for that muscle/muscle group.",
            link: 'https://github.com/SadiqurS/gym_exercises',
            source: 'Github'
        },
        {
            title: 'KRYPT',
            image: Project2,
            description: 'Developed a modern Web 3.0 application for sending transactions through the blockchain using React and Solidity. It features metamask pairing, ability to send Ethereum through the blockchain network, stunning glassmorphism design, and a transactions history.',
            link: 'https://github.com/SadiqurS/Krypt',
            source: 'Github'
        },
        {
            title: 'ASCEND BARUCH',
            image: Project3,
            description: "Utilized Wordpress and elementor to design and deploy Ascend Baruch's Website.",
            link: 'https://ascendbaruch.org/',
            source: 'Live'
        },
        {
            title: 'ALAN AI VIRTUAL ASSISSTANT ',
            image: Project4,
            description: "Utilized Alan A.I software to develop a virtual speech recognition assistant React Application. The application has features such as providing users with news across thousands of different sources, provide users data and weather across all regions, hold simple conversations with the A.I, solve simple arithmetics, as well as translate words or phrases from multiple languages.",
            link: 'https://github.com/SadiqurS/Alan_Ai_Virtual_Assistant',
            source: 'Github'
        },
        {
            title: 'PREVIOUS PORTFOLIO',
            image: Project5,
            description: ': Previous portfolio created using vanilla JavaScript, HTML, CSS, and bootstrap. Features: Interactive animations, Live background, and full responsiveness across all devices',
            link: 'https://github.com/SadiqurS/sadiqurS.github.io',
            source: 'Github'
        },
        {
            title: 'ASCEND HACKATHON',
            image: Project6,
            description: "Received first place for creating a portfolio website for Ascend Baruch’s annual hackathon. ",
            link: 'https://ascendhackathonportfolio.netlify.app/',
            source: 'Live'
        },
        {
            title: 'MEUSEUM OF CANDY',
            image: Project7,
            description: "Utilized Bootstrap to create and design a responsive ad-like webpage",
            link: 'https://museumofcandyproject.netlify.app/',
            source: 'Live'
        },
        {
            title: 'PRICE PANEL',
            image: Project8,
            description: "A simple responsive price panel design using media queries.",
            link: 'https://prinepanelproject.netlify.app/',
            source: 'Live'
        },
        {
            title: 'FTC ROBOTICS',
            image: Project9,
            description: 'Utilized TensorFlow to implement machine learning features such as being able to recognize and detect patterns in pictures that enable autonomous functions.',
            link: 'https://www.youtube.com/watch?v=ZZLolJPj2ag',
            source: 'Youtube'
        },
        {
            title: 'SNAKE GAME',
            image: Project10,
            description: "Utilized Processing to create a replica of the snake game for high school project",
            link: 'https://github.com/SadiqurS/Snake_Game/blob/master/snake_game.pde',
            source: 'Github'
        },
    ]

    return (
        <Flex
            id='portfolio'
            paddingBlock='5rem'
            justifyContent='center'
            alignItems='center'
            ref={ref}
            bg='#181818'
            pos='relative'
        >
            <ProjectModal isOpen={isOpen} onClose={onClose} modalData={modalData} />
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

                    as={motion.div}
                    variants={container}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true }}
                >
                    {projectList.map((project, index) => {
                        return (
                            <ProjectCard
                                project={project}
                                onOpen={onOpen}
                                setModalData={setModalData}
                                key={index}
                            />
                        )
                    })}
                </Wrap>
            </Flex>
        </Flex>
    )
}
