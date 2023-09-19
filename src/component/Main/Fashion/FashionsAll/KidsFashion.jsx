import { Box, VStack, Flex, Button, Heading, Image, HStack, Link, } from '@chakra-ui/react'
import React from 'react'
const KidsFashion = () => {
    const fashion = [
        "https://f.nooncdn.com/mpcms/EN0001/assets/0b0fe859-b1e4-4b24-8041-8f017889368b.png?format=avif",
        "https://f.nooncdn.com/mpcms/EN0001/assets/7c4391e1-0473-495c-bab7-3a0e77e99263.png?format=avif",
        "https://f.nooncdn.com/mpcms/EN0001/assets/ad2f96a1-9285-4f01-8333-05885e44124e.png?format=avif",
        "https://f.nooncdn.com/mpcms/EN0001/assets/01c72a00-ce4a-423a-893b-9623325321fc.png?format=avif",
        "https://f.nooncdn.com/mpcms/EN0001/assets/820b5736-71da-412c-9c0a-a8b9a468f5a8.png?format=avif",
        "https://f.nooncdn.com/mpcms/EN0001/assets/324e3735-84f7-49e3-a7da-51eccdda2048.png?format=avif",
        "https://f.nooncdn.com/mpcms/EN0001/assets/28082b27-32d3-4108-904d-99bd2160440c.png?format=avif"

    ]




    return (
        <Box mx={3} >
        <VStack align={"flex-start"}>
            <Flex
                pt={6}
                w={"full"}
                justifyContent={"space-between"}>
                <Heading
                    color={"#5a5a62"}
                    filter={"blur(0.4px)"}
                    size={{ base: "sm", md: "md" }}
                    as={"h2"}>Women's fashion</Heading >
                <Link href='https://www.noon.com/uae-en/lens-store/'>
                    <Button
                        filter={{base:"none", md:"blur(0.5px)"}}
                        fontSize={{base:"11px", md:"14px"}}
                        py={{base:1.5, md:2}}
                        h={"fit-content"}
                        px={{base:2, md:'2'}}
                        bg={"white"}
                        color={{base:'#008bff', md:"unset"}}
                        border={{base:"2px solid #008bff", md:"1px solid black"}}
                        borderRadius={"none"}>VIEW ALL</Button>
                </Link>
            </Flex>
            <Box  maxW={{ base: "100%", md: "unset" }} overflowX={{ base: "scroll", md: "none" }}>
                <HStack
                    spacing={3}
                    w={{ base: "max-content", md: "full" }}
                    align={"flex-start"}>
                    {
                        fashion.map((product, idx) => {
                            return <Link key={idx} href='https://www.noon.com/uae-en/lens-store/'> <Image
                                alt="/fashion/women-31229/clothing-16021/womens-tops/fashion-women?sort[by]=popularity&amp;sort[dir]=desc"
                                width={{ base: "90px", md: "200px" }}
                                height={{ base: "140x", md: "280px" }}
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

export default KidsFashion