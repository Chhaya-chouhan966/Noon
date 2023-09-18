import { Box, Image, Link, Text, Flex, VStack, HStack, Stack, Icon } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import facebook from '../../../assets/facebook.svg'
import twiter from '../../../assets/twiter.svg'
import instagram from '../../../assets/instagram.svg'
import linkedin from '../../../assets/linkedin.svg'


const FooterTop = () => {
    const [plusIcon, setPlusIcon] = useState({
        section1: false,
        section2: false,
        section3: false,
        section4: false,
        section5: false,
        section6: false,
        section7: false,

    })
    const footerProduct = [
        "Mobiles",
        "Tablets",
        "Laptops",
        "Home",
        "Camera",
        "Televisions",
        "Headphones",
        "Video",
    ]

    const appStoreImage = [
        {
            link: "https://apps.apple.com/app/noon-%D9%86%D9%88%D9%86/id1269038866?ls=1",
            image: "https://f.nooncdn.com/s/app/com/common/images/logos/app-store.svg"
        },
        {
            link: "https://play.google.com/store/apps/details?id=com.noon.buyerapp&pli=1",
            image: "https://f.nooncdn.com/s/app/com/common/images/logos/google-play.svg"
        },
        {
            link: "https://appgallery.huawei.com/app/C100441245",
            image: "https://f.nooncdn.com/s/app/com/common/images/logos/app-store.svg"
        },
    ]

    const mediaConnection = [
        {
            link: "https://www.facebook.com/noonunitedarabemirates/",
            image: facebook,
            imageName: "facebbok"
        },
        {
            link: "https://twitter.com/",
            image: twiter,
            imageName: "twiter"
        },
        {
            link: "https://www.instagram.com/noon_uae/",
            image: instagram,
            imageName: "instagram"
        },
        {
            link: "https://www.linkedin.com/company/nooncom/",
            image: linkedin,
            imageName: "linkedIn"
        },
    ]

    const IconButton = (section) => {
        setPlusIcon((prevPlusIcon) => ({
            ...prevPlusIcon,
            [section]: !prevPlusIcon[section],
        }));
    };

    const isMobile = window.innerWidth <= 768



    return (
        <Box py={0} bg={{ base: "#f7f7fa", md: "white" }}>
            <Stack
                bg={{ base: "white", md: "unset" }}
                flexDirection={{ base: 'column', md: "row" }}
                justifyContent={"space-between"}
                spacing={{ base: 3, md: 7, }}
                px={{base:3, md:7}}
                my={{ base: "12px", md: "none" }}
                >

                <Flex flexDirection={"column"} rowGap={2} >
                    <HStack justifyContent={{ base: 'space-between', md: "unset" }}>
                        <Text
                            as={"span"}
                            fontSize={"14px"}
                            fontWeight={{ base: 400, md: 600 }}
                            textTransform={!isMobile ? "uppercase" : "none"}>Electronics</Text>


                        <Icon
                            as={(!plusIcon.section1) ? AddIcon : MinusIcon}
                            width={"11px"}
                            height={"11px"}
                            display={isMobile ? "block" : "none"}
                            onClick={() => IconButton("section1")}
                        />
                    </HStack>
                    {
                        footerProduct.map((ele, idx) => {
                            return <Text
                                key={idx}
                                as={"p"}
                                fontSize={"12px"}
                                display={isMobile && (!plusIcon.section1) ? "none" : "block"}
                                textDecoration={{ base: "underline", md: "none" }}>{ele}</Text>
                        })
                    }
                    <hr />
                </Flex >

                <Flex flexDirection={"column"} rowGap={2} >
                    <HStack justifyContent={{ base: 'space-between', md: "unset" }}>
                        <Text
                            as={"span"}
                            fontSize={"14px"}
                            fontWeight={{ base: 400, md: 600 }}
                            textTransform={!isMobile ? "uppercase" : "none"}>Fashion</Text>

                        <Icon
                            as={(!plusIcon.section2) ? AddIcon : MinusIcon}
                            width={"11px"}
                            height={"11px"}
                            display={isMobile ? "block" : "none"}
                            onClick={() => IconButton("section2")}
                        />
                    </HStack>
                    {
                        footerProduct.map((ele, idx) => {
                            return <Text
                                key={idx}
                                as={"p"}
                                fontSize={"12px"}
                                display={isMobile && (!plusIcon.section2) ? "none" : "block"}
                                textDecoration={{ base: "underline", md: "none" }}>{ele}</Text>
                        })
                    }
                    <hr />
                </Flex >

                <Flex flexDirection={"column"} rowGap={2} >
                    <HStack justifyContent={{ base: 'space-between', md: "unset" }}>
                        <Text
                            as={"span"}
                            fontSize={"14px"}
                            textTransform={!isMobile ? "uppercase" : 'none'}
                            fontWeight={{ base: 400, md: 600 }}>Home And Kitchens</Text>

                        <Icon
                            as={(!plusIcon.section3) ? AddIcon : MinusIcon}
                            width={"11px"}
                            height={"11px"}
                            display={isMobile ? "block" : "none"}
                            onClick={() => IconButton("section3")}
                        />
                    </HStack>
                    {
                        footerProduct.map((ele, idx) => {
                            return <Text
                                key={idx}
                                as={"p"}
                                fontSize={"12px"}
                                display={isMobile && (!plusIcon.section3) ? "none" : "block"}
                                textDecoration={{ base: "underline", md: "none" }}
                            >{ele}</Text>
                        })
                    }
                    <hr />
                </Flex >


                <Flex flexDirection={"column"} rowGap={2} >
                    <HStack justifyContent={{ base: 'space-between', md: "unset" }}>
                        <Text
                            as={"span"}
                            fontSize={"14px"}
                            textTransform={!isMobile ? "uppercase" : 'none'}
                            fontWeight={{ base: 400, md: 600 }}>Beauty</Text>

                        <Icon
                            as={(!plusIcon.section4) ? AddIcon : MinusIcon}
                            width={"11px"}
                            height={"11px"}
                            display={isMobile ? "block" : "none"}
                            onClick={() => IconButton("section4")}
                        />
                    </HStack>
                    {
                        footerProduct.map((ele, idx) => {
                            return <Text
                                key={idx}
                                as={"p"}
                                fontSize={"12px"}
                                display={isMobile && (!plusIcon.section4) ? "none" : "block"}
                                textDecoration={{ base: "underline", md: "none" }}>{ele}</Text>
                        })
                    }
                    <hr />
                </Flex >


                <Flex flexDirection={"column"} rowGap={2} >
                    <HStack justifyContent={{ base: 'space-between', md: "unset" }}>
                        <Text
                            as={"span"}
                            fontSize={"14px"}
                            textTransform={!isMobile ? "uppercase" : 'none'}
                            fontWeight={{ base: 400, md: 600 }}>Baby And Toy</Text>

                        <Icon
                            as={(!plusIcon.section5) ? AddIcon : MinusIcon}
                            width={"11px"}
                            height={"11px"}
                            display={isMobile ? "block" : "none"}
                            onClick={() => IconButton("section5")}
                        />
                    </HStack>
                    {
                        footerProduct.map((ele, idx) => {
                            return <Text
                                key={idx}
                                as={"p"}
                                fontSize={"12px"}
                                display={isMobile && (!plusIcon.section5) ? "none" : "block"}
                                textDecoration={{ base: "underline", md: "none" }}>{ele}</Text>
                        })
                    }
                    <hr />
                </Flex >

                <Flex flexDirection={"column"} rowGap={2} >
                    <HStack justifyContent={{ base: 'space-between', md: "unset" }}>
                        <Text
                            as={"span"}
                            fontSize={"14px"}
                            fontWeight={{ base: 400, md: 600 }}
                            textTransform={!isMobile ? "uppercase" : 'none'}>Top Brands</Text>

                        <Icon
                            as={(!plusIcon.section6) ? AddIcon : MinusIcon}
                            width={"11px"}
                            height={"11px"}
                            display={isMobile ? "block" : "none"}
                            onClick={() => IconButton("section6")}
                        />
                    </HStack>
                    {
                        footerProduct.map((ele, idx) => {
                            return <Text
                                key={idx}
                                as={"p"}
                                fontSize={"12px"}
                                display={isMobile && (!plusIcon.section6) ? "none" : "block"}
                                textDecoration={{ base: "underline", md: "none" }}>{ele}</Text>
                        })
                    }
                    <hr />
                </Flex >

                <Flex flexDirection={"column"} rowGap={2} >
                    <HStack justifyContent={{ base: 'space-between', md: "unset" }}>
                        <Text
                            as={"span"}
                            fontSize={"14px"}
                            fontWeight={{ base: 400, md: 600 }}
                            textTransform={!isMobile ? "uppercase" : 'none'}
                        >Daily Groceries</Text>

                        <Icon
                            as={(!plusIcon.section7) ? AddIcon : MinusIcon}
                            width={"11px"}
                            height={"11px"}
                            display={isMobile ? "block" : "none"}
                            onClick={() => IconButton("section7")}
                        />
                    </HStack>
                    {
                        footerProduct.map((ele, idx) => {
                            return <Text
                                key={idx}
                                as={"p"}
                                fontSize={"12px"}
                                display={isMobile && (!plusIcon.section7) ? "none" : "block"}
                                textDecoration={{ base: "underline", md: "none" }} >{ele}</Text>
                        })
                    }
                    <hr />
                </Flex >

            </Stack>

            <HStack
                bg={{ base: "white", md: "unset" }}
                flexDirection={{ base: "column", md: "row" }}
                justifyContent={"space-around"}
                py={{ base: "0px", md: "60px" }}
            >

                <Flex>
                    <VStack >
                        <Text
                            as={"span"}
                            fontSize={"12px"}
                            fontWeight={400}>SHOP ON THE GO</Text>
                        <Flex
                            columnGap={2}
                            w={"full"}>
                            {
                                appStoreImage.map((ele, idx) => {
                                    return <Link href={ele.link} key={idx}>
                                        <Image src={ele.image} w={"110px"} />
                                    </Link>
                                })
                            }

                        </Flex>
                    </VStack>
                </Flex>

                <Flex >
                    <VStack>
                        <Text
                            as={"span"}
                            fontSize={"12px"}
                            fontWeight={400}>CONNECT WITH US</Text>
                        <Flex
                            columnGap={2}
                            w={"full"}>
                            {
                                mediaConnection.map((ele, idx) => {
                                    return <Link key={idx} href={ele.link}>
                                        <Image
                                            src={ele.image}
                                            h={{ base: "28px", md: "43px" }}
                                            w={{ base: "28px", md: "43px" }}
                                            alt={ele.imageName} />
                                    </Link>
                                })
                            }

                        </Flex>
                    </VStack>
                </Flex>

            </HStack>
        </Box>
    )
}

export default FooterTop