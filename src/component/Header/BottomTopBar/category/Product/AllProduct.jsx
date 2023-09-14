


// import React, { useState, useRef, useEffect } from 'react';
// import {
//     Box,
//     Menu,
//     MenuButton,
//     MenuList,
//     MenuItem,
//     MenuDivider,
// } from '@chakra-ui/react';
// import './allProduct.css';

// const AllProduct = () => {
//     const [hoveredCategory, setHoveredCategory] = useState(null);

//     const handleMouseEnter = (category) => {
//         setHoveredCategory(category);
//     };

//     const handleMouseLeave = () => {
//         setHoveredCategory(null);
//     };

//     const categories = [
//         "Electronics & Mobiles",
//         "Beauty & Fragrances",
//         "Fashion",
//         "Home & Kitchen",
//         "Sports & Outdoors",
//         "Toys & Games",
//         "Baby Products",
//         "Health & Nutrition",
//         "Automotive",
//         "Tools & Home Improvement",
//         "Pet Supplies",
//         "Office Supplies & Stationery",
//         "Music, Movies & TV Shows",
//         "Mahali",
//     ];

//     useEffect(() => {
//         if (hoveredCategory) {
//             document.body.classList.add('dim-overlay');
//         } else {
//             document.body.classList.remove('dim-overlay');
//         }
//     }, [hoveredCategory]);

//     return (
//         <Box
//             border={"2px solid red"}
//             overflowX={"scroll"}
//             css={{
//                 "&::-webkit-scrollbar": {
//                     display: "none",
//                 },
//             }}
//             whiteSpace={"nowrap"}
//            h={"full"}
//         >
//             <Menu h={"full"} isOpen={hoveredCategory !== null} onClose={handleMouseLeave}>
//                 {categories.map((category, index) => (
//                     <MenuButton

//                         key={category}
//                         px={4}
//                         py={2}
//                         h={"full"}
//                         transition='all 0.2s'
//                         _hover={{ bg: 'white', boxShadow: "0 0 5px gray" }}
//                         color={"#000000"}
//                         fontSize={"14px"}
//                         fontWeight={"700"}
//                         my={0}
//                         onMouseEnter={() => handleMouseEnter(category)}
//                         onMouseLeave={handleMouseLeave}

//                     >
//                         {category}
//                         {hoveredCategory === category && (
//                             <MenuList className="custom-menu-list" placement="top-start"
//                                 /* Adjust the width as needed */
//                                 style={{ width: '800px' }}>
//                                 <MenuItem>New Window</MenuItem>
//                                 <MenuDivider />
//                                 <MenuItem>Open...</MenuItem>
//                                 <MenuItem>Save File</MenuItem>
//                             </MenuList>
//                         )
//                         }
//                     </MenuButton >
//                 ))}
//             </Menu >
//         </Box >
//     );
// };

// export default AllProduct;


import React, { useState, useEffect } from 'react';
import {
    Box,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
} from '@chakra-ui/react';
import './allProduct.css';

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
        "Mahali",
    ];

    return (
        <Box
            // border={"2px solid red"}
            overflowX={"scroll"}
            css={{
                "&::-webkit-scrollbar": {
                    display: "none",
                },
            }}
            whiteSpace={"nowrap"}
            h={"full"}
        >
            <Menu isOpen={hoveredCategory !== null} onClose={handleMouseLeave} >
                {categories.map((category, index) => (
                    <MenuButton
                        key={category}
                        px={4}
                        py={2}
                        h={"full"}
                        transition='all 0.2s'
                        _hover={{ bg: 'white', boxShadow: "0 0 5px gray" }}
                        color={"#000000"}
                        fontSize={"14px"}
                        fontWeight={"700"}
                        my={0}
                        onMouseEnter={() => handleMouseEnter(category)}
                        onMouseLeave={handleMouseLeave}
                    >
                        {category}
                        {hoveredCategory === category && (
                            <MenuList   position="absolute" // Position the dropdown absolutely
                            left={"-1400px"} // Align with the left edge of the parent
                            top="100%" // Position below the parent
                            width="100vw" // Full width of the viewport
                            >
                                <MenuItem >New Window</MenuItem>
                                <MenuDivider />
                                <MenuItem>Open...</MenuItem>
                                <MenuItem>Save File</MenuItem>
                            </MenuList>
                        )}
                    </MenuButton>
                ))}
            </Menu>
        </Box>
    );
};

export default AllProduct;
