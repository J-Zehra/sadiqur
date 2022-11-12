import { Flex } from '@chakra-ui/react'
import { useInView } from 'framer-motion';
import React, { useContext, useEffect, useRef } from 'react'
import { SectionTitle } from '../components/SectionTitle';
import { ApplicationContext } from '../context/AppContext';
import { allBreakpoints } from '../miscellaneous/breakpoints';

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

    return (
        <Flex
            id='skills'
            justifyContent='center'
            alignItems='center'
            ref={ref}
            // paddingBlock='5rem'
            h='100vh'
        >
            <Flex
                w={allBreakpoints}
                margin='auto'
                justifyContent='center'
                alignItems='center'
            >
                <SectionTitle title={'Skills'} />
            </Flex>
        </Flex>
    )
}
