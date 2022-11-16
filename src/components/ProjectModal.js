import { Box, Button, Image, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react'
import React from 'react'

export const ProjectModal = ({ isOpen, onClose, modalData }) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            isCentered
            motionPreset='slideInBottom'
            preserveScrollBarGap
            size='xl'
        >
            <ModalOverlay 
            />
            <ModalContent
                w={{
                    base: '90%',
                    md: '100%'
                }}
            >
                <ModalHeader
                    color='palette.primary'
                    fontWeight='bold'
                >
                    {modalData.title}
                </ModalHeader>
                <ModalBody
                    gap='1.2rem'
                    display='flex'
                    flexDir='column'
                >
                    <Box>
                        <Image
                            src={modalData.image}
                        />
                    </Box>
                    <Text
                        color='palette.primary'
                    >
                        { modalData.description }
                    </Text>
                </ModalBody>

                <ModalFooter
                    gap='1rem'
                >
                    <Button 
                        onClick={onClose}
                        bg='transparent'
                        color='#BB07FA'
                        border='1px solid #BB07FA'
                        _hover={{}}
                    >
                        Close
                    </Button>
                    <Button 
                        as='a'
                        target='_blank'
                        href={modalData.link}
                        bg='#BB07FA'
                        _hover={{}}
                    >
                        View Live
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
