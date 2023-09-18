import { Box, HStack, Tooltip, Text, Flex, Image, Button } from '@chakra-ui/react'
import React from 'react'

const FooterBottom = () => {

    const a = [
        "https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/card-mastercard.svg",
        "https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/card-visa.svg",
        "https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/tabby.svg",
        "https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/tamara-en.svg",
        "https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/card-amex.svg",
        "https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/cod-en.svg"
    ]
    const items = [
        "Careers",
        "Warranty Policy",
        "Sell with us",
        "Terms of Use",
        "Terms of Sale",
        "Privacy Policy",
        "Consumer Rights"]

    // isMobile=window.innerWidth<=1024
    return (
        <Box bg={{base:"white", md:"#f7f7fa"}} border={{base:"none", md:"2px solid #eff0f6"}} maxH={"auto"} >

            <HStack
                flexDirection={{ md: "row", base: "column" }}
                justifyContent={{ md: "space-between", base: 'center' }}
                alignItems={{ md: "flex-start", base: "center" }}
                py={{base:"0px", md:"30px"}}    
                pb={{base:"20px", md:"0px"}}            >
                        
                <Tooltip
                    bg={"white"}
                    boxShadow={"0 0 5px gray"}
                    textAlign={"center"}
                    color={"black"}
                    hasArrow
                    w={"200px"}
                    h={'auto'}
                    label='Top hello this side from dubai Top hello this side from dubai Top hello this side from dubai  '
                    placement='top-start'>
                    <Button bg={"none"} fontSize={"12px"} color={"#7E859B"}>© 2023 noon. All Rights Reserved</Button>
                </Tooltip>
                <Flex
                    w={{ base: "full", 'md': "unset" }}
                    justifyContent={{ base: "space-evenly", md: "unset" }}
                    columnGap={{ base: 1, md: 5 }}
                >
                    {
                        a.map((ele, idx) => {
                            return <Image
                                w={"41px"}
                                h={"26px"}
                                src={ele}
                                key={idx} />
                        })
                    }

                </Flex>
                <Flex
                    flexWrap={{ base: "wrap", md: "unset" }}
                    justifyContent={{ base: "center", md: "space-between" }}
                    fontSize={"12px"}
                    gap={{ base: "1", md: "3" }}
                    >
                    {items.map((item, index) => (
                        <Text
                            key={index}
                            _hover={{ textDecoration: "underline", cursor: "pointer" }}
                        >
                            {item}
                        </Text>
                    ))}
                </Flex>
            </HStack>
        </Box>

    )
}

export default FooterBottom