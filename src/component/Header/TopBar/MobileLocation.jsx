import { Box, Flex, Text, Image, Icon } from '@chakra-ui/react'
import React from 'react'
import { TriangleDownIcon } from '@chakra-ui/icons'

const MobileLocation = () => {
    return (
        <Box display={{ base: "block", md: "none" }} >
            <Flex fontSize={"14px"} gap={2} px={3} align={"center"}>
                <Image height={"16px"} w={"16px"} src="https://f.nooncdn.com/s/app/com/noon/images/address_latlng_indicator.svg" />
                <Text >Deliver To</Text>
                <Text fontWeight={"600"} >131-30 E St-AI Setw...</Text>
                <Icon height={"11px"} w={"11px"} as={TriangleDownIcon} />
            </Flex>
        </Box>
    )
}

export default MobileLocation