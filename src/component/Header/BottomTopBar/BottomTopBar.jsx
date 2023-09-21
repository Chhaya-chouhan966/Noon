import React from 'react'
import {
    Box,
    Container,
    Flex
} from '@chakra-ui/react'
import AllCategory from './allCategry/AllCategory'
import Category from './category/Category'
import SlideBanner from './SliderBaner/SlideBanner'

const BottomTopBar = () => {
    return (
        <Flex
            border={"2px solid red"}
            h={"7vh"}
            bg={"#fcfbf4"}
            justifyContent={"space-between"}
        >
           
                <AllCategory />
                <Category />
                <SlideBanner />
          
        </Flex>
    )
}

export default BottomTopBar