"use client"
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export default function ImageOne() {
    return (
        <Box pt={"50px"} pb={{base:"40px", lg:"75px"}} mx={"20px"}>
            <Container maxW={1200}>
                <Stack direction={{base:"column", lg:"row"}} alignItems={"center"}>
                    <Box w={{base:"100%", lg:"45%"}} pr={{lg:"25px"}} mb={{base:"20px", lg:"0px"}} textColor={"#152D35"}>
                        <Heading fontSize={"40px"} color={"teal"}>
                            First meeting with the President.
                        </Heading>
                        <Text lineHeight={"7"} mt={"15px"} fontSize={"17px"}>
                            First official PIAIC meeting on November 1st, 2018. From left to right: Mr. Zia Ullah Khan (CEO Panacloud), Mr. Kazi Rahat Ali (General Secretary PIAIC), President Dr. Arif Alvi, Mr. Yousuf Lakhani (Presdent Saylani Welfare Trust, Mr. Muhammad Ghazzal (COO Saylani Welfare Trust).
                        </Text>
                    </Box>
                    <Box w={{base:"100%", lg:"55%"}}>
                        <Image
                            // sizes='full'
                            src='images/President-meeting.jpg' alt="First official PIAIC meeting" />
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}
