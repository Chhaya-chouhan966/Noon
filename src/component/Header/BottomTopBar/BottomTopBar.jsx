import React from 'react'
import {
    Container,
    Flex
} from '@chakra-ui/react'
import Category from './category/Category'
import SlideBanner from './SliderBaner/SlideBanner'
import AllCategory from './allCategry/AllCategory'


const BottomTopBar = () => {
    return (
        <Container
            // border={"2px solid red"}

            maxW={"full"}
            h={"7vh"}
            bg={"#fcfbf4"}
            px={0}
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