import {
    Box,
    Flex,
    VStack,
    HStack,
    Text,
    Heading,
    Link,
    Image
} from '@chakra-ui/react'
import React, { useState } from 'react'
import help from '../../../assets/help.svg'
import care from '../../../assets/care.svg'


const HelpCenter = () => {
    const [Disabled, setDisabled] = useState(null);

    const HelpCenterContact = [
        {
            image: help,
            Text: "HELP CENTER",
            url: "help.noon.com"
        },
        {
            image: care,
            Text: "EMAIL SUPPORT",
            url: "care@noon.com"
        },
    ]
    const isMobile = window.innerWidth <= 768
    return (
        <Box
            bg={'#f7f7fa'}
            border={{ base: "none", md: "2px solid #eff0f6" }}
            py={{ base: "12px", md: "unset" }}
        >

            <Flex
                bg={{ base: "white", md: "#f7f7fa" }}
                flexDirection={{ base: "column", md: "row" }}
                justifyContent={"space-between"}
                px={{ base: 2, md: 7 }}
                py={4}
            >

                <VStack alignItems={{ base: "center", md: "flex-start" }} spacing={1} >
                    <Heading py={{ base: "12px", md: "unset" }} as="h6" size="md">We're Always Here To Help</Heading>
                    <Text
                        as={"p"}
                        color={"#9399ac"}
                        fontSize={"14px"}
                        display={isMobile ? "none" : "block"}
                    >Reach out to us through any of these support channels</Text>

                </VStack>

                <HStack spacing={{ base: 5, md: 10 }}
                    flexDirection={{ base: "column", md: "row" }} >
                    {
                        HelpCenterContact.map((ele, index) => {
                            return (
                                <Link href='https://help.noon.com/hc/en-us'
                                    _hover={{ cursor: "poiter" }}
                                    onMouseEnter={() => setDisabled(index)}
                                    onMouseLeave={() => setDisabled(null)}
                                    opacity={Disabled === index ? 0.4 : 10}
                                    key={index}
                                >
                                    <HStack spacing={3}>
                                        <Image
                                            bg={'white'}
                                            src={ele.image}
                                            w={"32px"}
                                            h={"32px"}
                                            border={"1px solid #eff1f7 "}
                                            boxShadow={"0 0 0.5px"}
                                            borderRadius={"50%"} />
                                        <VStack spacing={0} alignItems={"flex-start"}>
                                            <Text fontSize={"11px"} color={"#7E859B"}>{ele.Text}</Text>
                                            <Text fontSize={"18px"}>{ele.url}</Text>
                                        </VStack>
                                    </HStack>
                                </Link>
                            )
                        })
                    }

                </HStack>

            </Flex>
        </Box >
    )
}

export default HelpCenter