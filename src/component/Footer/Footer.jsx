import { Container, Box } from '@chakra-ui/react'
import React from 'react'

import FooterBottom from './footerBottom/FooterBottom'
import FooterTop from './footerTop/FooterTop'
import HelpCenter from './HelpCenter/HelpCenter'

const Footer = () => {
    return (
        <Box
            maxW={'container.ls'}
            maxH={{ base: "auto", 'md': "unset" }}
            minH={{ base: "fit-content", md: "unset" }}
            border={"2px solid red"}
        >
            <HelpCenter />
            <FooterTop />
            <FooterBottom />
        </Box>
    )
}

export default Footer