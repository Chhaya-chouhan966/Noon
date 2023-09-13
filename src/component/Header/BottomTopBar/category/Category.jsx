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
            overflowX={"scroll"}
            css={{
                "&::-webkit-scrollbar": {
                    display: "none", // Hide vertical scrollbar for WebKit browsers (e.g., Chrome, Safari)
                },
                // scrollbarWidth: "none", // Hide vertical scrollbar for Firefox
            }}
        >
       
            {Array.from({ length: 6 }).map((_, index) => (
                <AllProduct key={index} />
            ))}
        </Box>
    )
}

export default Category;
