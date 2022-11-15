import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { BiRightArrowCircle } from 'react-icons/bi'

export const AboutButton = () => {
    return (
        <Button
            bg='palette.primary'
            borderRadius='20rem'
            width='15rem'
            marginTop='1.5rem'
            p='2rem 1rem'
            _hover={{}}
            pos='relative'
            _active={{}}
            as='a'
            href='#contact'
            leftIcon={
                <Box
                    fontSize='3.5rem'
                    color='#C41DFF'
                    pos='absolute'
                    left='.5rem'
                    top='50%'
                    transform='translate(0, -50%) rotate(90deg)'
                >
                    <BiRightArrowCircle/>
                </Box>
            }

            _after={{
                content: '""',
                pos: 'absolute',
                width: '100%',
                height: '100%',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                background: 'linear-gradient(to right, #C41DFF, #DC8AF9)',
                zIndex: '-1',
                borderRadius: '20rem',
                filter: 'blur(5px)'
            }}
        >
            <Text
                bg='linear-gradient(to right, #C41DFF, #DC8AF9)'
                backgroundClip='text'
                fontWeight='bold'
                fontSize='1.2rem'
                marginLeft='1.2rem'
            >
                Resume
            </Text>
        </Button>
    )
}
