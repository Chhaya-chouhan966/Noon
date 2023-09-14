import { Box } from '@chakra-ui/react'
import React from 'react'
import AllProduct from './Product/AllProduct'

const Category = () => {


    return (
        <Box
            w={"1000px"}
            // border={"2px solid red"}
            h={"7vh"}

            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
           
        >
                <AllProduct />
            
        </Box>
    )
}

export default Category;
