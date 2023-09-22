import React from 'react'
import TopBar from './TopBar/TopBar'
import BottomTopBar from './BottomTopBar/BottomTopBar'
import { Box } from '@chakra-ui/react'
import MobileLocation from './TopBar/MobileLocation'
const Header = () => {
    return (
        <Box >
            <TopBar />
            <MobileLocation />
            <BottomTopBar />
        </Box>
    )
}

export default Header