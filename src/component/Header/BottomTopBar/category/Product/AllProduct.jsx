


// // import React, { useState, useRef, useEffect } from 'react';
// // import {
// //     Box,
// //     Menu,
// //     MenuButton,
// //     MenuList,
// //     MenuItem,
// //     MenuDivider,
// // } from '@chakra-ui/react';
// // import './allProduct.css';

// // const AllProduct = () => {
// //     const [hoveredCategory, setHoveredCategory] = useState(null);

// //     const handleMouseEnter = (category) => {
// //         setHoveredCategory(category);
// //     };

// //     const handleMouseLeave = () => {
// //         setHoveredCategory(null);
// //     };

// //     const categories = [
// //         "Electronics & Mobiles",
// //         "Beauty & Fragrances",
// //         "Fashion",
// //         "Home & Kitchen",
// //         "Sports & Outdoors",
// //         "Toys & Games",
// //         "Baby Products",
// //         "Health & Nutrition",
// //         "Automotive",
// //         "Tools & Home Improvement",
// //         "Pet Supplies",
// //         "Office Supplies & Stationery",
// //         "Music, Movies & TV Shows",
// //         "Mahali",
// //     ];

// //     useEffect(() => {
// //         if (hoveredCategory) {
// //             document.body.classList.add('dim-overlay');
// //         } else {
// //             document.body.classList.remove('dim-overlay');
// //         }
// //     }, [hoveredCategory]);

// //     return (
// //         <Box
// //             border={"2px solid red"}
// //             overflowX={"scroll"}
// //             css={{
// //                 "&::-webkit-scrollbar": {
// //                     display: "none",
// //                 },
// //             }}
// //             whiteSpace={"nowrap"}
// //            h={"full"}
// //         >
// //             <Menu h={"full"} isOpen={hoveredCategory !== null} onClose={handleMouseLeave}>
// //                 {categories.map((category, index) => (
// //                     <MenuButton

// //                         key={category}
// //                         px={4}
// //                         py={2}
// //                         h={"full"}
// //                         transition='all 0.2s'
// //                         _hover={{ bg: 'white', boxShadow: "0 0 5px gray" }}
// //                         color={"#000000"}
// //                         fontSize={"14px"}
// //                         fontWeight={"700"}
// //                         my={0}
// //                         onMouseEnter={() => handleMouseEnter(category)}
// //                         onMouseLeave={handleMouseLeave}

// //                     >
// //                         {category}
// //                         {hoveredCategory === category && (
// //                             <MenuList className="custom-menu-list" placement="top-start"
// //                                 /* Adjust the width as needed */
// //                                 style={{ width: '800px' }}>
// //                                 <MenuItem>New Window</MenuItem>
// //                                 <MenuDivider />
// //                                 <MenuItem>Open...</MenuItem>
// //                                 <MenuItem>Save File</MenuItem>
// //                             </MenuList>
// //                         )
// //                         }
// //                     </MenuButton >
// //                 ))}
// //             </Menu >
// //         </Box >
// //     );
// // };

// // export default AllProduct;


import React, { useState, useEffect } from 'react';
import {
    Box,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    Flex,
    Icon
} from '@chakra-ui/react';
import './allProduct.css';
import {ChevronRightIcon,ChevronLeftIcon} from '@chakra-ui/icons'


const AllProduct = () => {
    const [hoveredCategory, setHoveredCategory] = useState(null);

    const handleMouseEnter = (category) => {
        setHoveredCategory(category);
    };

    const handleMouseLeave = () => {
        setHoveredCategory(null);
    };

    useEffect(() => {
        if (hoveredCategory) {
            document.body.classList.add('dim-overlay');
        } else {
            document.body.classList.remove('dim-overlay');
        }
    }, [hoveredCategory]);

    const categories = [
        "Electronics",
        "Men",
        "Women",
        "Home",
        "Beauty & Fragrance",
        "Baby",
        "Toys",
        "Sports",
        "Health & Nutrition",
        "Bestsellers" ,
        "Sell on noon"
    ];

    return (
        <Box border={"5px solid blue"}
            // overflowX={"scroll"}
            whiteSpace={"nowrap"}
            // css={{
            //     "&::-webkit-scrollbar": {
            //         width: "0",
            //     },
            //     // scrollbarWidth: "none",
            // }}
            // h={"auto"}
            // w={"auto"}
            // zIndex={1}
            overflowX={"auto"} // Enable horizontal scrolling

        >  
         <Icon as={ChevronLeftIcon}/> 

        <Menu isOpen={hoveredCategory !== null} onClose={handleMouseLeave} >
                {
                    categories.map((category, index) => (
                        <MenuButton
                            border={"2px solid green"}
                            key={category}
                            px={4}
                            h={'full'}
                            transition='all 0.2s'
                            _hover={{ bg: 'white', boxShadow: "0 0 5px gray" }}
                            fontSize={"14px"}
                            fontWeight={"700"}
                            onMouseEnter={() => handleMouseEnter(category)}
                            onMouseLeave={handleMouseLeave}
                        >
                            {category}
                            {hoveredCategory === category && (
                                <MenuList
                                    // position="absolute"
                                    width="100%"
                                    left={-1440}
                                    top={0}
                                >
                                    <MenuItem >New Window</MenuItem>
                                    <MenuDivider />
                                    <MenuItem>Open...</MenuItem>
                                    <MenuItem>Save File</MenuItem>
                                </MenuList>
                            )}
                        </MenuButton>
                    ))
                }
            </Menu>
            <Icon as={ChevronRightIcon}/>

        </Box>
    );
};

export default AllProduct;

