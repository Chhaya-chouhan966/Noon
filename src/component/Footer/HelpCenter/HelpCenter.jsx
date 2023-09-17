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

    return (
        <Box
            bg="#f7f7fa"
            border={"2px solid #eff0f6"}

        >

            <Flex
                flexDirection={{ base: "column", md: "row" }}
                justifyContent={"space-between"}
                px={{ base: 2, md: 7 }}
                py={4}
                bg={"yellow.100"}>

                <VStack alignItems={"flex-start"} spacing={1}>
                    <Heading as="h6" size="md">We're Always Here To Help</Heading>
                    <Text
                        as={"p"}
                        color={"#9399ac"}
                        fontSize={"14px"}>Reach out to us through any of these support channels</Text>
                </VStack>

                <HStack spacing={10}
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