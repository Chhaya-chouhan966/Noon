import React, { useEffect, useState } from 'react'
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
    Icon,
    InputGroup,
    InputRightElement

} from "@chakra-ui/react";
import SignIn from './SignIn/SignIn';
import Whishlist from './WhishList/Whishlist';
import Cart from './cart/Cart';
import { SearchIcon } from '@chakra-ui/icons'



const TopBar = () => {
    const [cancelButton, setCancelButton] = useState(false)
    const isMobile = window.innerWidth <= 768

    const searchInput = () => {
        setCancelButton(true)
    }



    return (
        <Box
            maxH={'fit-content'}
            minH={"auto"}
            display={"flex"}
            bg={{ base: "white", md: "#feee00" }}
            justifyContent={"space-between"}
            py={{base:0,md:2}}
            alignItems="center">
         


            {/* Dubai Name with symbols */}
            <Flex
                py={2}
                gap={2}
                mx={3}
                w={"auto"}
                alignItems={{ base: "flex-start", md: "center" }}
            >

                <Image src="https://f.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg" w={"86px"} h="24px" />

                <Image display={{ base: "none", md: "block" }} src="https://f.nooncdn.com/s/app/com/common/images/flags/ae.svg" w="31px" h="20px" />

                    <Stack
                        display={{ base: "none", md: "block" }}
                        spacing={0}>
                        <Text fontSize="14px" as="span" >Deliver_to</Text>
                        <Text fontSize="14px" color={"#404553"} fontWeight="500" as="span"> Dubai</Text>
                    </Stack>

                    <Button
                        display={{ base: "none", md: "block" }}
                        bg={"none"}
                        border={"none"}
                        px={0}
                        mt={"-20px"}>
                        <Image src="https://f.nooncdn.com/s/app/com/noon/icons/dropdownArrow.svg" />
                    </Button>
                </Flex>
                {/* Search Baar */}
                <Flex>
                    <InputGroup alignItems={"center"} justifyContent={"center"}>
                        <InputRightElement
                            display={{ base: "block", md: "none" }}
                            pointerEvents="none"
                            mt={1}
                            px={2}
                            children={<SearchIcon color={"gray"} />} // You can customize the icon color here
                        />
                        <Input
                            w={"50vw"}
                            h={"32px"}
                            borderRadius={"5px"}
                            outline={"none"}
                            border={{ base: "1px solid gray", md: "none" }}
                            placeholder='What are you looking for?'
                            fontSize={"14px"}
                            bg={"white"}
                            onClick={searchInput}
                        />
                    </InputGroup>
                    {
                        isMobile && <Button
                            bg={"none"}
                            display={!cancelButton ? "none" : "block"}
                            onClick={() => setCancelButton(false)}
                            color={"gray"} >Cancel </Button>
                    }

                </Flex>

                <Flex gap={2}
                    // border={"2px solid green"}
                    w={"auto"}
                    mx={3}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                >
                    <Text display={{ base: "none", md: "block" }} as={"p"}>العربية</Text>
                    <Text display={{ base: "none", md: "block" }} as={"p"}>|</Text>
                    <SignIn />
                    <Text display={{ base: "none", md: "block" }} as={"p"}>|</Text>
                    <Whishlist />
                    <Text display={{ base: "none", md: "block" }} as={"p"}>|</Text>
                    <Cart />

                </Flex>



        </Box>

    )
}

export default TopBar