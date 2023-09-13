import React from 'react'
import {
    Box,
    Container,
    Image,
    VStack,
    Stack,
    Flex,
    Text,
    Button,
    Input,
} from "@chakra-ui/react";
import SignIn from './SignIn/SignIn';
import Whishlist from './WhishList/Whishlist';
import Cart from './cart/Cart';



const TopBar = () => {
    return (

        <Container
            bg="#feee00"
            h="9vh"
            maxW={"100%"}
            display="flex"
            alignItems="center">

            <Image src="https://f.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg" w={"86px"} h="24px" />

            {/* Dubai Name with symbols */}
            <Flex
                ml="8px"
                // border={"2px solid red"}
                w={"180px"}
                h="39px"
                justifyContent={"space-evenly"}
                alignItems="center">
                <Image src="https://f.nooncdn.com/s/app/com/common/images/flags/ae.svg" w="31px" h="20px" />

                <Stack
                    direction="column"
                    spacing={0}>
                    <Text fontSize="14px" as="span" >Deliver to</Text>
                    <Text fontSize="14px" color={"#404553"} fontWeight="500" as="span">Dubai</Text>
                </Stack>

                <Button
                    bg={"none"}
                    border={"none"}
                    px={0}
                    mt={"-20px"}>
                    <Image src="https://f.nooncdn.com/s/app/com/noon/icons/dropdownArrow.svg" />
                </Button>
            </Flex>

            {/* Search Baar */}
            <Box>
                <Input
                    w={"800px"}
                    h={"32px"}
                    borderRadius={"5px"}
                    outline={"none"}
                    border={"none"}
                    placeholder='What are you looking for?'
                    fontSize={"14px"}
                    bg={"white"}
                />
            </Box>

            <Flex
                // border={"2px solid green"}
                w={"350px"}
                h={"32px"}
                mx={"20px"}
                justifyContent={"space-between"}
                alignItems={"center"}
            >
                <Text as={"p"}>العربية</Text>
                <Text as={"p"}>|</Text>
                <SignIn />
                <Text as={"p"}>|</Text>
                <Whishlist />
                <Text as={"p"}>|</Text>
                <Cart />

            </Flex>



        </Container>

    )
}

export default TopBar