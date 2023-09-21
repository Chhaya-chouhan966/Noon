import { Box, Flex, Image, Text, Link, Icon } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import React from 'react'
const SlideBanner = () => {

    return (
        <Box
            bg={"#fcfbf4"}
            w={{ base: "full", md: "auto" }}
            display={{ base: "block", md: "flex" }}
            justifyContent={"center"}
            alignItems={"center"}
            p={3}

            // border={"2px solid green"}
        >
            <Flex
                borderRadius={"5px"}
                h={"full"}
                my={{ base: 0, md: 3 }}
                w={{ base: "full", md: "auto" }}
                px={"8px"}
                justify="center"
                align={"center"}
                border={`2px solid red`}
                py={{ md: 3, base: 0 }}
            >
                <Link
                    // border={"2px solid blue"}
                    hover={{ textDecoration: "none" }}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={{base:6, md:2}}>
                    <Flex>
                        <Text
                            fontWeight={"600"}
                            fontSize={{ base: "16px", md: "12px" }}>noon</Text>
                        <Text
                            fontWeight={"600"}
                            // h={"fit-content"}
                            bg={"yellow.100"}
                            borderRadius={"100%"}
                            fontSize={{ base: "16px", md: "12px" }}>one</Text>
                    </Flex>

                    <Text
                        fontSize={{base:"15px", md:"12px"}}
                        as="span"
                        color={"green"}
                        fontWeight={"600"}
                        fontStyle="italic">TRYFREESHIPING</Text>
                    <Icon
                        color={"red"}
                        as={ChevronRightIcon}
                        bg="linear-gradient(to right, red 0%, yellow 50%, green 100%)"
                        borderRadius={"100%"} />
                </Link>

            </Flex>

        </Box>
    )
}

export default SlideBanner