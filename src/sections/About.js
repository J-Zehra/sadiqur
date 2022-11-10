import { Flex, Text } from '@chakra-ui/react'
import { useInView } from 'framer-motion';
import React, { useContext, useEffect, useRef } from 'react'
import { ApplicationContext } from '../context/AppContext';

export const About = () => {

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
            setActiveNav(1);
        }
    }, [isInView, setActiveNav])

    return (
        <Flex
            id='about'
            h='100vh'
            justifyContent='center'
            alignItems='center'
            ref={ref}
            zIndex='-1'
        >
            <Text textAlign='center'>
            Hero

            </Text>
        </Flex>
    )
}
