import { Box } from '@chakra-ui/react'
import React from 'react'
import WomenFashion from './FashionsAll/WomenFashion'
import MenFashion from './FashionsAll/MenFashion'
import KidsFashion from './FashionsAll/KidsFashion'

const Fashion = () => {
    return (
        <Box bg={"#dddddd"} py={1}>
            <WomenFashion />
            <MenFashion />
            <KidsFashion />
        </Box>
    )
}

export default Fashion