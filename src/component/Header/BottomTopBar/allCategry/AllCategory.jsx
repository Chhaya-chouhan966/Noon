import {
    Box,
    Flex,
    Text,
    Image,
    Button
} from '@chakra-ui/react'
import React from 'react'
import dropDown from '../../../../assets/dropDown.svg'
const AllCategory = () => {
    return (
        <Flex
            // border={"2px solid blue"}
            w={"15%"}
            h={"7vh"}
            justifyContent={"space-around"}
            alignItems={"center"}
            fontWeight={700}
            fontSize={"14px"}
            color={"blue"}
        >
            ALL CATEGORIES
            <Button
                mr={"-5px"}
                bg={"none"}
            >
                <Image src={dropDown} alt="Your Image Alt Text" w={"28px"} h={"28px"} color={"blue"} />
            </Button>
        
        </Flex>
    )
}

export default AllCategory