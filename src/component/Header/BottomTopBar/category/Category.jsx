import { Box, HStack } from '@chakra-ui/react'
import React from 'react'
import './category.css'

const Category = () => {

  const categories = [
    "Electronics & Mobiles",
    "Beauty & Fragrances",
    "Fashion",
    "Home & Kitchen",
    "Sports & Outdoors",
    "Toys & Games",
    "Baby Products",
    "Health & Nutrition",
    "Automotive",
    "Tools & Home Improvement",
    "Pet Supplies",
    "Office Supplies & Stationery",
    "Music, Movies & TV Shows",
    "Mahali",
  ];
  return (
    <Box style={{ overflowX: "auto", }}
      css={{
        "&::-webkit-scrollbar": {
          width: "0",
        },
      }}
      id="menuScroll"
      w={"auto"}
      display={"flex"}
      justifyContent={"center"}
      alignContent={"center"}
    >

      <HStack whiteSpace={"nowrap"} w={"max-content"}>
        {categories.map((category, index) => (
          <Box
            h={"full"}
            textTransform={"uppercase"}
            key={index}
            px={2}
            fontSize="14px"
            fontWeight="700"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            _hover={{ bg: "white", boxShadow: "0 0 5px black" }}

          >
            {category}
          </Box>
        ))}
      </HStack>
    </Box>
  )
}

export default Category