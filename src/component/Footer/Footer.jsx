import { Container, VStack } from '@chakra-ui/react'
import React from 'react'
import FooterBottom from './footerBottom/FooterBottom'
import FooterTop from './footerTop/FooterTop'

const Footer = () => {
    return (
        <Container
            maxW={'container.ls'} 
            // border={"2px solid red"}
            >
            <FooterTop />
            <FooterBottom />
        </Container>
    )
}

export default Footer