import {
    Box,
    Button,
    Image,
    useDisclosure,
    Flex,
    HStack,
    Text,
    Stack,
    Divider,
    Container,

} from '@chakra-ui/react';
import React, { useState, useRef, useEffect } from 'react';
import dropDown from '../../../../assets/dropDown.svg';
import './allCategory.css'



const AllCategory = () => {
    const { onOpen, onClose } = useDisclosure();
    const [open, setOpen] = useState(false);
    const buttonRef = useRef(null);
    const [selectedCategory, setSelectedCategory] = useState("Electronics & Mobiles")

    useEffect(() => {
        if (open) {
            document.body.classList.add('dim-overlay');
        } else {
            document.body.classList.remove('dim-overlay');
        }
    }, [open]);

    const handleMouseEnter = () => {
        buttonRef.current.style.backgroundColor = '#fcfbf4'
        setOpen(true);
    };

    const handleMouseLeave = () => {
        setOpen(false);
    };

    const ElectronicProducts = [
        "Mobiles & accessories",
        "Laptops & accessories",
        "Video Games",
        "Televisions",
        "Power Banks",
        "Headphones & Earphones",
        "Speakers",
        "Home Appliances",
        "Wearables",
        "Camera, Photo & Video",
        "Tablets & accessories",
    ]

    const categories = [
        "Electronics & Mobiles",
        "Beauty & Fragrances",
        "Fashion",
        "Home & Kitchen",
        "Sports & Outdoors",
        "Toys & Games",
        "Baby Products",
        "Health & Nutrition",
        "Automotive",
        "Tools & Home Improvement",
        "Pet Supplies",
        "Office Supplies & Stationery",
        "Music, Movies & TV Shows",
        "Mahali,"
    ]

    return (
        <>
            <Container
                display="flex"
                flexDirection="column"
                // border="2px solid blue"
                maxW={"210px"}
                h="7vh"
                position="relative"
            >
                <Box
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    // borderRight={"0.5px solid gray"}
                    // borderRadius={"none"}
                    // border="2px solid red"
                    >
                    <Button
                    //  border={"2px solid green"}
                        ref={buttonRef}
                        mr="-5px"
                        bg="none"
                        w="100%"
                        h="40px" // Set a fixed height for the button
                        mx={0}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        fontWeight={700}
                        fontSize="14px"
                        color="blue"
                        position="relative"
                        px={0}

                    >
                        ALL CATEGORIES
                        <Image
                            src={dropDown}
                            alt="Your Image Alt Text"
                            w="28px"
                            h="28px"
                            color="blue"
                        />
                    </Button>


                    <Box
                        mt="10px"
                        // border="2px solid red"
                        position="absolute"
                        top="30px"
                        left="0"
                        width="650px"
                        display={open ? 'flex' : 'none'}

                    >
                        <Flex

                            flexDirection={"column"}
                            // border="2px solid blue"
                            w={"31.5%"}
                            borderRight={"0.5px solid gray"}
                            fontSize={"12px"}
                            fontWeight={400}
                            pt={"10px"}
                            bg={"#fcfbf4"}
                            pl={"14px"}

                        >

                            {categories.map((ele) => {
                                return <Text
                                    _hover={{ color: "blue" }}
                                    p={"8px 0px"}
                                    onMouseEnter={() => setSelectedCategory(ele)}
                                    
                                >{ele}</Text>
                            })}


                        </Flex>
                        <Flex
                            flexDirection={"column"}
                            w={"68.5%"}
                            bg={"#ffffff"}
                        >


                            <Text
                                as={"h2"}
                                fontWeight={"500"}
                                h={"50px"}
                                // border={"2px solid red"}
                                pl={"12px"}
                                display={"flex"}
                                alignItems={"center"}
                            >Beauty & Fragrances</Text>
                            <Divider width="90%" color="blue" mx={"12px"} />

                            <Flex pl={"12px"} mt={"10px"}>

                                <Box w={"50%"}>
                                    <Text as={"p"} fontSize={"14px"} fontWeight={"500"}>Top Brand</Text>
                                    {selectedCategory === "Electronics & Mobiles" &&
                                        ElectronicProducts.map((ele) => {
                                            return <Text
                                                _hover={{ color: "blue" }}
                                                mt={"10px"}
                                                fontSize={"12px"}>{ele}</Text>
                                        })}
                                </Box>

                                <Box w={"50%"}>
                                    <Text fontSize={"14px"} as={"p"} fontWeight={"500"}>Top Brand</Text>
                                    {selectedCategory === "Electronics & Mobiles" &&
                                        ElectronicProducts.map((ele) => {
                                            return <Text 
                                            _hover={{ color: "blue" }}
                                            mt={"10px"} 
                                            fontSize={"12px"}>{ele}</Text>
                                        })}
                                </Box>

                            </Flex>

                        </Flex>
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default AllCategory;
