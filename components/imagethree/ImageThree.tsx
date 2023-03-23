"use client"
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export default function ImageThree() {
    return (
        <Box pt={{base:"40px", lg:"75px"}} pb={"100px"} mx={"20px"}>
            <Container maxW={1200}>
                <Stack direction={{base:"column", lg:"row"}} alignItems={"center"}>
                    <Box w={{base:"100%", lg:"45%"}} pr={{lg:"25px"}} mb={{base:"20px", lg:"0px"}} textColor={"#152D35"}>
                        <Heading fontSize={"40px"} color={"teal"}>
                            President launching the PIAIC website.
                        </Heading>
                        <Text lineHeight={"7"} mt={"15px"} fontSize={"17px"}>
                            President Dr. Arif Alvi launching the official website of the PIAIC on December 9, 2018. From left to right: Mr. Adil Altaf (Director Panacloud), Mr. Zia Ullah Khan (CEO Panacloud), Mr. Hunaid Lakhani (Chancellor Iqra University), President Dr. Arif Alvi, Mr. Sulaiman S. Mehdi (Chairman Pakistan Stock Exchange), Mr. Zeeshan Hanif (CTO Panacloud), Maulana Bashir Farooqui (Founder Saylani Welfare Trust), Mr. Yousuf Lakhani (President Saylani Welfare Trust).                    </Text>
                    </Box>
                    <Box w={{base:"100%", lg:"55%"}}>
                        <Image
                            // sizes='full'
                            src='images/Launching-site.jpg' />
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}
