import { Box, Flex, Text, HStack, Link } from "@chakra-ui/react";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import './Product/allProduct.css'

const Category = () => {
  const [leftIcon, setLeftIcon] = useState(true);
  const [rightIcon, setRightIcon] = useState(false);

  const allCategories = [
    "Electronics",
    "Men",
    "Women",
    "Home",
    "Beauty & Fragrance",
    "Baby",
    "Toys",
    "Sports",
    "Health & Nutrition",
    "Bestsellers",
    "Sell on noon",
  ];
  const initialCategoriesToShow = allCategories.slice(0, 10);

  const showLeftIcon = () => {
    setLeftIcon(false)
    setRightIcon(true)
  }

  const showRightIcon = () => {
    setRightIcon(false)
    setLeftIcon(true)
  }

  return (
    <Box  border="2px solid red" style={{ overflowX: "auto", }}
      // whiteSpace={"nowrap"}
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
      
      <HStack  whiteSpace={"nowrap"} w={"max-content"}>
        {allCategories.map((category, index) => (
          <Link
            h={"full"}
            // border={"2px solid green"}
            textTransform={"uppercase"}
            key={index}
            px={2}
            fontSize="13px"
            fontWeight="700"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}

          >
            {category}
          </Link>
        ))}
      </HStack>
    </Box>

  );
};
export default Category;



