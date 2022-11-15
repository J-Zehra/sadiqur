import { Flex } from '@chakra-ui/react'
import { useInView } from 'framer-motion';
import React, { useContext, useEffect, useRef } from 'react'
import { ContactForm } from '../components/ContactForm';
import { SectionTitle } from '../components/SectionTitle';
import { ApplicationContext } from '../context/AppContext';
import { allBreakpoints } from '../miscellaneous/breakpoints';

export const Contact = () => {

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
            setActiveNav(null);
        }
    }, [isInView, setActiveNav])

    return (
        <Flex
            id='contact'
            paddingBlock='5rem'
            justifyContent='center'
            alignItems='center'
            ref={ref}
        >
            <Flex
                w={allBreakpoints}
                margin='auto'
                justifyContent='center'
                alignItems='center'
                flexDir='column'
                gap='8rem'
            >
                <SectionTitle title={"Let's get in touch"} />
                <ContactForm/>
            </Flex>
        </Flex>
    )
}
