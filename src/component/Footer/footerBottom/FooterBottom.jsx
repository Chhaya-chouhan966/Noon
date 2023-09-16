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
    return (
        <Box  bg="#f7f7fa" border={"2px solid #eff0f6"}>

            <HStack
                // border={"2px solid green"}
                flexDirection={{md:"unset", base:"column"}}
                justifyContent={{md:"space-between", base:'center'}}
                alignItems={{md:"flex-start", base:"center"}}
                py={"30px"}
            >
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
                <Flex columnGap={5}>
                    {
                        a.map((ele) => {
                            return <Image
                                w={"41px"}
                                h={"26px"}
                                src={ele} />
                        })
                    }

                </Flex>
                <Flex fontSize={"12px"} columnGap={3}>
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