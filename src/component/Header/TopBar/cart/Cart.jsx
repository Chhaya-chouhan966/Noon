import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Flex,
    Image,
    Text
} from "@chakra-ui/react";

const Cart = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Flex
            display={{ base: "none", md: "block" }}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            h={"32px"}
            // border={"2px solid red"}
            onClick={onOpen}
        >
            <Button

                h={"32px"}
                bg={"none"}
                className='Sign'
                fontSize={"14px"}
                color={"404553"}
                fontWeight={"500"}
                px={1}
            >
                <Text>Cart</Text>
                <Image src="https://f.nooncdn.com/s/app/com/noon/icons/cart.svg" h={"17px"} w={"17px"} />
            </Button>

            <Modal
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                motionPreset='slideInBottom'
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        'ModalOverlay' is defined but never used      no-unused-vars
                        Line 15:5:   'ModalContent' is defined but never used      no-unused-vars
                        Line 16:5:   'ModalHeader' is defined but never used       no-unused-vars
                        Line 17:5:   'ModalFooter' is defined but never used       no-unused-vars
                        Line 18:5:   'ModalBody' is defined but never used         no-unused-vars
                        Line 19:5:   'ModalCloseButton' is defined but never used  no-unused-vars
                        Line 28:13:  'isOpen' is assigned a value but never used   no-unused-vars
                        Line 28:21:  'onOpen' is assigned a value but never used   no-unused-vars
                        Line 28:29:  'onClose' is assigned a value but never used  no-unused-vars

                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </Flex>
    )
}

export default Cart;
