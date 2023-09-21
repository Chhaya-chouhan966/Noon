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
    // <Flex
    //   border={"2px solid red"}
    //   h={"7vh"}
    //   w={"900px"}
    //   justify={"center"}
    //   align={"center"}

    // >
    //   {
    //     leftIcon && <ChevronLeftIcon fontSize={"20px"} onClick={showLeftIcon} />
    //   }

    //   <HStack whiteSpace={"nowrap"} overflowX={"auto"} css={{
    //     overflow: "hidden"
    //   }} border={"2px solid blue"} >
    //     {allCategories.map((category, index) => (
    //       <Link border={"2px solid green"} textTransform={"uppercase"} key={index} px={2} fontSize="13px" fontWeight="700">
    //         {category}
    //       </Link>
    //     ))}
    //   </HStack>
    //   {
    //     rightIcon && <ChevronRightIcon fontSize={"20px"} onClick={showRightIcon} />
    //   }
    // </Flex>




    <Box border="2px solid red" style={{ overflowX: "scroll", }}
      whiteSpace={"nowrap"}
    >
      <HStack w={"max-content"} border={"2px solid blue"}>
        {allCategories.map((category, index) => (
          <Link
            border={"2px solid green"}
            textTransform={"uppercase"}
            key={index}
            px={2}
            fontSize="13px"
            fontWeight="700"
          >
            {category}
          </Link>
        ))}
      </HStack>
    </Box>

  );
};
export default Category;



