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
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,

} from '@chakra-ui/react';
import React, { useState, useRef, useEffect } from 'react';



const AllProduct = () => {
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
        // "Health & Nutrition",
        // "Automotive",
        // "Tools & Home Improvement",
        // "Pet Supplies",
        // "Office Supplies & Stationery",
        // "Music, Movies & TV Shows",
        // "Mahali,"
    ]

    return (
        <>
            <Menu
            >
                {
                    categories.map((ele) => {
                        return <MenuButton
                            px={4}
                            py={2}
                            h={"full"}
                            transition='all 0.2s'
                            _hover={{ bg: 'white',  boxShadow:"0 0 5px gray"  }}
                            // _focus={{ boxShadow: 'outline' }}
                            whiteSpace="nowrap"
                            color={"#000000"}
                            fontSize={"14px"}
                            fontWeight={"700"}
                            my={0}
                
                        >{ele}</MenuButton>
                    })
                }

                <MenuList style={{
                    width: '100vw',
                }}>
                   
                    <MenuItem>New Window</MenuItem>
                    <MenuDivider />
                    <MenuItem>Open...</MenuItem>
                    <MenuItem>Save File</MenuItem>
                </MenuList>
            </Menu>
        </>
    )
};

export default AllProduct


