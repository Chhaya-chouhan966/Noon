import { Box, Flex, Image, Text, Link, Icon } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import React from 'react'
const SlideBanner = () => {
    const linearGradient = "linear-gradient(red, yellow 10%, green 20%)";
    return (
        <Box
            bg={"#fcfbf4"}
            h={"full"}
            w={"auto"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            p={2}
        >
            <Flex
               border={"2px solid yellow"}
               borderRadius={"5px"}
                h={'full'}
                my={3}
                w={'auto'}
                justify={"center"}
                align={"center"}

            >
                <Link display={"flex"} justifyContent={"center"} alignItems={"center"} gap={1}>
                    <Text>noon</Text>
                    <Text as="span">one</Text>
                    <Text color={"green"} fontWeight={"600"}>TryFree</Text>
                    <Icon color={"red"} as={ChevronRightIcon} />
                </Link>

            </Flex>

        </Box>
    )
}

export default SlideBanner