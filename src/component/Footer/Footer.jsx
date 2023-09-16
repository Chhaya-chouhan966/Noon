import { Container, Box } from '@chakra-ui/react'
import React from 'react'

import FooterBottom from './footerBottom/FooterBottom'
import FooterTop from './footerTop/FooterTop'
import HelpCenter from './HelpCenter/HelpCenter'
import Description from './ShopingDescription/Description'

const Footer = () => {
    return (
        <Box
            maxW={'container.ls'}
            maxH={{ base: "auto", 'md': "unset" }}
            minH={{ base: "fit-content", md: "unset" }}
           
        >
            <Description />
            <HelpCenter />
            <FooterTop />
            <FooterBottom />
        </Box>
    )
}

export default Footer