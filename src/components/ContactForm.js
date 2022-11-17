import { Button, Flex, Input, Textarea, useToast } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { Socials } from './Socials'

import emailjs from '@emailjs/browser';

export const ContactForm = () => {

    const [loading, setLoading] = useState(false)
    const toast = useToast()

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendMessage = async() => {
        setLoading(true)
        
        if (!firstName || !lastName || !email || !message) {
            toast({
                title: 'Error.',
                description: "Please fill all the fields",
                status: 'error',
                duration: 3000,
                isClosable: true,
                position: 'bottom-right'
            })

            setLoading(false)
            return;
        }

        const params = {
            firstName,
            lastName,
            email,
            message,
            myEmail: process.env.REACT_APP_OWNER_EMAIL
        }

        await emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            params,
            process.env.REACT_APP_EMAILJS_API_KEY
        ).then((res) => {
            console.log(res)
            setLoading(false)

        }).catch((err) => {
            console.log(err)
            setLoading(false)
        })

        toast({
            title: 'Submitted!',
            description: "Your message is sent. We will reply shortly",
            status: 'success',
            duration: 3000,
            isClosable: true,
            position: 'bottom-right'
        })

        setFirstName('')
        setLastName('')
        setEmail('')
        setMessage('')
    }

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
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
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
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <Button
                w={{
                    base: '100%',
                    xl: '70%'
                }}
                bg='#BB07FA'
                p='1.6rem'
                _hover={{}}
                onClick={sendMessage}
                isLoading={loading}
                loadingText='Submitting'
            >
                Send Message
            </Button>
            <Socials />
        </Flex>
    )
}
