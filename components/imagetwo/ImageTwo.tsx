"use client"
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export default function ImageTwo() {
    return (
        <Box py={{base:"40px", lg:"75px"}} bg={'gray.50'} mx={"20px"}>
            <Container maxW={1200}>
                <Stack direction={{base:"column-reverse", lg:"row"}} alignItems={"center"}>
                    <Box w={{base:"100%", lg:"55%"}}>
                        <Image
                            // sizes='full'
                            src='images/Second-meeting.jpg' alt="Meeting with Chief Secretary Sindh" />
                    </Box>
                    <Box w={{base:"100%", lg:"45%"}} pl={{lg:"25px"}} mb={{base:"20px", lg:"0px"}} textColor={"#152D35"}>
                        <Heading fontSize={"40px"} color={"teal"}>
                            Meeting with Chief Secretary Sindh.
                        </Heading>
                        <Text lineHeight={"7"} mt={"15px"} fontSize={"17px"}>
                            Meeting with Chief Secretary of Sindh, Mr. Mumtaz Ali Shah on December 28th, where he assured the PIAIC management team of his full support for the national cause and offered space at all the public universities in Sindh.                    </Text>
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}
