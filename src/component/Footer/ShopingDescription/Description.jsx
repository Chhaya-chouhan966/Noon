import React, { useState } from 'react';
import { Box, Button, VStack, Text } from '@chakra-ui/react';

const Description = () => {
    const [more, setMore] = useState(false)
    const [more2, setMore2] = useState(false)

    const isMore = () => {
        if (!more) {
            setMore(true)
        } else {
            setMore(false)
        }
    }
   
    const  isMoreTwo = () => {
        if (!more2) {
            setMore2(true)
        } else {
            setMore2(false)
        }
    }

    return (
        <Box p={7} bg="#f7f7fa">
         
                <VStack alignItems={"flex-start"} spacing={0} >
                    <Text
                        as="h2"
                        fontSize="14px"
                        mb={"14px"}
                        fontWeight={500}>Superior online shopping in the UAE</Text>
                    <Text
                        as="p"
                        fontSize="12px"
                        color={"#7E859B"}
                        maxH={more ? "auto" : "none"}>
                        As the leading destination for <Text as={"span"} style={{ textDecoration: "underline" }}>online shopping in the UAE</Text>, noon has everything you need under one roof. Whether you’re shopping for the latest  <Text as={"span"} color={"#3866DF"}>electronic products</Text>, fashion, homeware, <Text as={"span"} color={"#3866DF"}>products for kids and babies</Text>, <Text as={"span"} style={{ textDecoration: "underline" }}>books</Text> and stationery, sports and health essentials, <Text as={"span"} color={"#3866DF"}>beauty products</Text>, or groceries, we have millions of products in the noon <Text as={"span"} style={{ textDecoration: "underline" }}>UAE store</Text>. As a  <Text as={"span"} style={{ textDecoration: "underline" }}>customer-centric</Text> online store, we make it easier to <Text as={"span"} style={{ textDecoration: "underline" }}>buy online</Text> with flexible payment plans that help you save, along with regular sales across our extensive product range, gift cards, wishlists, our exclusive Mashreq VIP card, our easy-to-use shopping app, and so much more.
                        {
                            more && <Text
                                as="p"
                                fontSize="12px"
                                color={"#7E859B"}>
                                As the leading destination for <Text as={"span"} style={{ textDecoration: "underline" }}>online shopping in the UAE</Text>, noon has everything you need under one roof. Whether you’re shopping for the latest  <Text as={"span"} color={"#3866DF"}>electronic products</Text>, fashion, homeware, <Text as={"span"} color={"#3866DF"}>products for kids and babies</Text>, <Text as={"span"} style={{ textDecoration: "underline" }}>books</Text> and stationery, sports and health essentials, <Text as={"span"} color={"#3866DF"}>beauty products</Text>, or groceries, we have millions of products in the noon <Text as={"span"} style={{ textDecoration: "underline" }}>UAE store</Text>. As a  <Text as={"span"} style={{ textDecoration: "underline" }}>customer-centric</Text> online store, we make it easier to <Text as={"span"} style={{ textDecoration: "underline" }}>buy online</Text> with flexible payment plans that help you save, along with regular sales across our extensive product range, gift cards, wishlists, our exclusive Mashreq VIP card, our easy-to-use shopping app, and so much more.

                            </Text>
                        }
                    </Text>
                    <Button
                        p={0}
                        w={"fit-content"}
                        height={"fit-content"}
                        variant={"none"}
                        fontSize={"13px"}
                        color={"#3866DF"}
                        display={"flex"}
                        justifyContent={"flex-start"}
                        alignItems={"center"}
                        onClick={isMore}
                    > {more ? "Less" : "Read More"}</Button>
                </VStack>
                <VStack alignItems={"flex-start"} mt={"14px"} spacing={0} >
                    <Text
                        as="h2"
                        fontSize="14px"
                        mb={"14px"}
                        fontWeight={500}>Superior online shopping in the UAE</Text>
                    <Text
                        as="p"
                        fontSize="12px"
                        color={"#7E859B"}
                        maxH={more2 ? "auto" : "none"}>
                        As the leading destination for <Text as={"span"} style={{ textDecoration: "underline" }}>online shopping in the UAE</Text>, noon has everything you need under one roof. Whether you’re shopping for the latest  <Text as={"span"} color={"#3866DF"}>electronic products</Text>, fashion, homeware, <Text as={"span"} color={"#3866DF"}>products for kids and babies</Text>, <Text as={"span"} style={{ textDecoration: "underline" }}>books</Text> and stationery, sports and health essentials, <Text as={"span"} color={"#3866DF"}>beauty products</Text>, or groceries, we have millions of products in the noon <Text as={"span"} style={{ textDecoration: "underline" }}>UAE store</Text>. As a  <Text as={"span"} style={{ textDecoration: "underline" }}>customer-centric</Text> online store, we make it easier to <Text as={"span"} style={{ textDecoration: "underline" }}>buy online</Text> with flexible payment plans that help you save, along with regular sales across our extensive product range, gift cards, wishlists, our exclusive Mashreq VIP card, our easy-to-use shopping app, and so much more.
                        {
                            more2 && <Text
                                as="p"
                                fontSize="12px"
                                color={"#7E859B"}>
                                As the leading destination for <Text as={"span"} style={{ textDecoration: "underline" }}>online shopping in the UAE</Text>, noon has everything you need under one roof. Whether you’re shopping for the latest  <Text as={"span"} color={"#3866DF"}>electronic products</Text>, fashion, homeware, <Text as={"span"} color={"#3866DF"}>products for kids and babies</Text>, <Text as={"span"} style={{ textDecoration: "underline" }}>books</Text> and stationery, sports and health essentials, <Text as={"span"} color={"#3866DF"}>beauty products</Text>, or groceries, we have millions of products in the noon <Text as={"span"} style={{ textDecoration: "underline" }}>UAE store</Text>. As a  <Text as={"span"} style={{ textDecoration: "underline" }}>customer-centric</Text> online store, we make it easier to <Text as={"span"} style={{ textDecoration: "underline" }}>buy online</Text> with flexible payment plans that help you save, along with regular sales across our extensive product range, gift cards, wishlists, our exclusive Mashreq VIP card, our easy-to-use shopping app, and so much more.

                            </Text>
                        }
                    </Text>
                    <Button
                        p={0}
                        w={"fit-content"}
                        height={"fit-content"}
                        variant={"none"}
                        fontSize={"13px"}
                        color={"#3866DF"}
                        display={"flex"}
                        justifyContent={"flex-start"}
                        alignItems={"center"}
                        onClick={isMoreTwo}
                    > {more2 ? "Less" : "Read More"}</Button>
                </VStack>
            
        </Box>
    );
}

export default Description;
