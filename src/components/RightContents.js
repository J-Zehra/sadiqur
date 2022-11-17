import { Box, Flex, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import { container, item3 } from '../miscellaneous/motionVariants'
import { AboutButton } from './AboutButton'

export const RightContents = () => {
    return (
        <Flex
            flexDir='column'
            flex={1}
            zIndex='1'
            justifyContent='center'
            alignItems='end'

            as={motion.div}
            variants={container}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
        >
            <Text
                textAlign='end'

                as={motion.h1}
                variants={item3}
            >
                Sadiqur Sakib.
            </Text>
            <Text
                width='100%'
                fontWeight='semibold'
                textAlign={{
                    base: 'center',
                    md: 'start'
                }}

                as={motion.h5}
                variants={item3}
            >
                I have been programming since the start of high school, with over 2 years of experience in web-development. My goal as a developer is to create autonomous applications that can improve quality of life and build a better society.
            </Text>
            <Box
                as={motion.div}
                variants={item3}
            >
                <AboutButton />
            </Box>
        </Flex >
    )
}
