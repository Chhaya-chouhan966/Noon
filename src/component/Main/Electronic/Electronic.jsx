import { Box, VStack, Flex, Button, Heading, Image, HStack, Link } from '@chakra-ui/react'
import React, { useEffect } from 'react'

const Electronic = () => {

    const fashion = [
        "https://f.nooncdn.com/mpcms/EN0001/assets/a3f8d9ba-91c5-4550-bfb2-5a7ef53d4d6e.png?format=avif",
        "https://f.nooncdn.com/mpcms/EN0001/assets/55d96255-74ae-4aaf-8ac2-c3986190fde4.png?format=avif",
        "https://f.nooncdn.com/mpcms/EN0001/assets/e5b44374-dbba-4157-8f83-9d9975d8ad60.png?format=avif",
        "https://f.nooncdn.com/mpcms/EN0001/assets/7d75a3bd-08c0-4a04-9e8c-cb9547da3047.png?format=avif",
        "https://f.nooncdn.com/mpcms/EN0001/assets/dc317c7b-7401-485a-aefc-0509ebfbebab.png?format=avif",
        "https://f.nooncdn.com/mpcms/EN0001/assets/bf672a58-6b5d-4fb1-870a-0034e4291660.png?format=avif",
        "https://f.nooncdn.com/mpcms/EN0001/assets/2f199af6-7143-45dd-ad1e-e253b44b88fa.png?format=avif"

    ]
    return (
        <Box p={3} bg={"white"}>
            <VStack align={"flex-start"}>
                <Flex
                    pt={{base:"unset", md:3}}
                    w={"full"}
                    justifyContent={"space-between"}>
                    <Heading
                        color={"#5a5a62"}
                        filter={{ base: "none", md: "blur(0.4px)" }}
                        size={{ base: "sm", md: "md" }}
                        as={"h2"}>Electronic</Heading >
                    <Link href='https://www.noon.com/uae-en/lens-store/'>
                        <Button
                            filter={{ base: "none", md: "blur(0.5px)" }}
                            fontSize={{ base: "11px", md: "14px" }}
                            py={{ base: 1.5, md: 2 }}
                            h={"fit-content"}
                            px={{ base: 2, md: '2' }}
                            bg={"white"}
                            color={{ base: '#008bff', md: "unset" }}
                            border={{ base: "2px solid #008bff", md: "1px solid black" }}
                            borderRadius={"none"}>VIEW ALL</Button>
                    </Link>
                </Flex>
                <Box
                    maxW={{ base: "100%", md: "unset" }}
                    overflowX={{ base: "scroll", md: "none" }}
                    overflow={{base:"block", md:"hidden"}}
                 >
                    <HStack
                        spacing={3}
                        w={{ base: "max-content", md: "full" }}
                        align={"flex-start"}>
                        {
                            fashion.map((product, idx) => {

                                return <Link key={idx} href='https://www.noon.com/uae-en/lens-store/'><Image
                                    alt="/fashion/women-31229/clothing-16021/womens-tops/fashion-women?sort[by]=popularity&amp;sort[dir]=desc"
                                    width={{ base: "90px", md: "200px" }}
                                    height={{ base: "140x", md: "200px" }}
                                    src={product}
                                />
                                </Link>
                            })
                        }
                    </HStack>
                </Box>
            </VStack>
        </Box>
    )
}

export default Electronic