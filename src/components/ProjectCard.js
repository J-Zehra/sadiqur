import { AspectRatio, Button, Flex, Text, WrapItem } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { item } from '../miscellaneous/motionVariants'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const ProjectCard = ({ project, index, onOpen, setModalData }) => {

    const [hovered, setHovered] = useState(-1)

    return (
        <WrapItem
            pos='relative'
            borderRadius='.4rem'
            overflow='hidden'
            key={index}

            onMouseOver={() => setHovered(index)}
            onMouseOut={() => setHovered(-1)}

            as={motion.div}
            variants={item}
        >
            <AspectRatio
                ratio={16 / 9}
                w={{
                    base: '90vw',
                    md: '26rem'
                }}
            >
                <LazyLoadImage
                    effect='blur'
                    src={project.image}
                    width='100%'
                    height='15rem'
                    alt={project.title}
                />
            </AspectRatio>

            <Flex
                pos='absolute'
                w='100%'
                h='100%'
                justifyContent='center'
                alignItems='center'
                flexDir='column'
                gap='1.2rem'
                bg='#BB07FA'
                opacity='0'
                transition='all .5s ease'

                _hover={{
                    opacity: .75
                }}
            >
                <Text
                    fontWeight='black'
                    fontSize='1.5rem'
                    textAlign='center'
                    opacity='1'
                    w='100%'

                    as={motion.p}
                    initial={{
                        x: '50vw',
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1,
                        x: hovered === index ? 0 : '50vw',
                        transition: {
                            duration: .5
                        }
                    }}
                >
                    {project.title}
                </Text>
                <Button
                    fontWeight='bold'
                    fontSize='1rem'
                    color='white'
                    bg='transparent'
                    border='1px solid white'
                    onClick={() => {
                        onOpen()
                        setModalData(project)
                    }}

                    _hover={{
                        color: 'black',
                        bg: 'white'
                    }}

                    as={motion.button}
                    initial={{
                        x: '-50vw',
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1,
                        x: hovered === index ? 0 : '-50vw',
                        transition: {
                            duration: .3
                        }
                    }}
                >
                    Learn More
                </Button>
            </Flex>
        </WrapItem>
    )
}
