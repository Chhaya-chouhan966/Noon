import React from 'react'
import {
    Container,
    Flex
} from '@chakra-ui/react'
import AllCategory from './allCategry/AllCategory'
import Category from './category/Category'
import SlideBanner from './SliderBaner/SlideBanner'

const BottomTopBar = () => {
    return (
        <Container
            // border={"2px solid red"}
            maxW={"100%"}
            h={"7vh"}
            bg={"#fcfbf4"}
        >
            <Flex>
                <AllCategory />
                <Category />
                <SlideBanner/>
            </Flex>
        </Container>
    )
}

export default BottomTopBar