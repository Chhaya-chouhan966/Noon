import React from 'react'
import {
    Box,
    Container,
    Flex
} from '@chakra-ui/react'
import Category from './category/Category'
import SlideBanner from './SliderBaner/SlideBanner'
import AllCategory from './allCategry/AllCategory'


const BottomTopBar = () => {
    return (
        <Box
            // border={"2px solid red"}
            h={"7vh"}
            bg={"#fcfbf4"}
            px={0}
        >
            <Flex>
                <AllCategory />
                <Category />
                <SlideBanner />
            </Flex>
        </Box>
    )
}

export default BottomTopBar