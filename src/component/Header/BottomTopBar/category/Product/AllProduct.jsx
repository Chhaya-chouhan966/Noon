


import React, { useState, useRef, useEffect } from 'react';
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

  useEffect(() => {
    if (hoveredCategory) {
      document.body.classList.add('dim-overlay');
    } else {
      document.body.classList.remove('dim-overlay');
    }
  }, [hoveredCategory]);

  return (
    <Menu isOpen={hoveredCategory !== null} onClose={handleMouseLeave}>
      {categories.map((category, index) => (
        <MenuButton
          key={category}
          px={4}
          py={2}
          h={"full"}
          transition='all 0.2s'
          _hover={{ bg: 'white', boxShadow: "0 0 5px gray" }}
          whiteSpace="nowrap"
          color={"#000000"}
          fontSize={"14px"}
          fontWeight={"700"}
          my={0}
          onMouseEnter={() => handleMouseEnter(category)}
          onMouseLeave={handleMouseLeave}
        
        >
          {category}
          {hoveredCategory === category && (
            <MenuList style={{width:"50vw"}} className="custom-menu-list">
              <MenuItem>New Window</MenuItem>
              <MenuDivider />
              <MenuItem>Open...</MenuItem>
              <MenuItem>Save File</MenuItem>
            </MenuList>
          )}
        </MenuButton>
      ))}
    </Menu>
  );
};

export default AllProduct;
