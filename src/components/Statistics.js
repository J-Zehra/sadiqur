import { Flex, Text } from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react'

import { container, item as variantItem } from '../miscellaneous/motionVariants';

import CountUp from 'react-countup';

export const Statistics = () => {

    // SET THE REF FOR THE ELEMENT TO TRACK
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })

    const list = [
        { title: 'Projects', count: 42 },
        { title: 'Hours Coding', count: '1300' },
        { title: 'Hours Working', count: '910' },
    ]

    return (
        <Flex
            w='100%'
            justifyContent='center'
            alignItems='center'
            gap={{
                base: '2rem',
                md: '5rem'
            }}

            as={motion.div}
            variants={container}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
        >
            {list.map((item, index) => {
                return (
                    <Flex
                        w={{
                            base: '6rem',
                            md: '8rem'
                        }}
                        h={{
                            base: '6rem',
                            md: '8rem'
                        }}
                        borderRadius='20rem'
                        flexDir='column'
                        justifyContent='center'
                        alignItems='center'
                        border='3px solid #6A2F99'
                        key={index}

                        as={motion.div}
                        variants={variantItem}
                    >
                        <Text
                            fontSize={{
                                base: '1.6rem',
                                md: '1.8rem'
                            }}
                            fontWeight='bold'
                            ref={ref}
                        >
                            {isInView && (
                                <CountUp
                                    start={0}
                                    end={item.count}
                                />
                            )}
                        </Text>
                        <Text
                            color='#A7A7A7'
                            fontSize={{
                                base: '.6rem',
                                md: '.8rem'
                            }}
                        >
                            {item.title}
                        </Text>
                    </Flex>
                )
            })}
        </Flex>
    )
}
