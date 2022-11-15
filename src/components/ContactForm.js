import { Button, Flex, Input, Textarea } from '@chakra-ui/react'
import React from 'react'

export const ContactForm = () => {
    return (
        <Flex
            w='100%'
            justifyContent='center'
            flexDir='column'
            alignItems='center'
            gap='2rem'
        >
            <Flex
                gap='2rem'
                w={{
                    base: '100%',
                    xl: '70%'
                }}
                justifyContent='center'
                alignItems='center'
            >
                <Input
                    placeholder='First Name'
                    outline='none'
                    border='none'
                    bg='#1D1D1D'
                    w='100%'
                    p='1.6rem 1rem'
                    _focusVisible={{
                        outline: '1px solid rgba(220, 138, 249, 1)'
                    }}

                    _placeholder={{
                        color: '#989898'
                    }}
                />
                <Input
                    placeholder='Last Name'
                    outline='none'
                    border='none'
                    bg='#1D1D1D'
                    w='100%'
                    p='1.6rem 1rem'
                    _focusVisible={{
                        outline: '1px solid rgba(220, 138, 249, 1)'
                    }}

                    _placeholder={{
                        color: '#989898'
                    }}
                />
            </Flex>
            <Input
                placeholder='Email'
                outline='none'
                border='none'
                bg='#1D1D1D'
                _focusVisible={{
                    outline: '1px solid rgba(220, 138, 249, 1)'
                }}
                w={{
                    base: '100%',
                    xl: '70%'
                }}
                p='1.6rem 1rem'
                _placeholder={{
                    color: '#989898'
                }}
            />
            <Textarea
                placeholder='Message'
                outline='none'
                border='none'
                bg='#1D1D1D'
                rows='8'
                resize='none'
                _focusVisible={{
                    outline: '1px solid rgba(220, 138, 249, 1)'
                }}
                w={{
                    base: '100%',
                    xl: '70%'
                }}
                p='1.6rem 1rem'
                _placeholder={{
                    color: '#989898'
                }}
            />
            <Button
                w={{
                    base: '100%',
                    xl: '70%'
                }}
                bg='#BB07FA'
                p='1.6rem'
                _hover={{}}
            >
                Send Message
            </Button>
        </Flex>
    )
}
