"use client";

import { Box, Button, Container, Flex, Heading, HStack, Image, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Avatar, AvatarGroup } from '@chakra-ui/react'

export default function TopContainer() {
    return (
        <Box backgroundImage={"images/BackHero.jpg"} overflow={"hidden"} backgroundSize={"cover"} >
            <Container maxW={1200} px={"20px"} >
                <Stack direction={{base:"column", lg:"row"}} alignItems={"center"}>
                    <Box w={{ base: "100%", lg: "60%" }} textColor={"#152D35"} py={"50px"}>
                        <Heading fontSize={"55px"} color={"teal"}>
                            Presidential Initiative
                        </Heading>
                        <Heading fontSize={"45px"} fontWeight={"medium"}>
                            for Artificial Intelligence and Computing
                        </Heading>
                        <Text lineHeight={"7"} my={"15px"} fontSize={"17px"}>
                            The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies. Experts are calling this the 4th industrial revolution.
                        </Text>
                        <Button
                            fontWeight={"bold"}
                            boxShadow={'0px 1px 25px -5px rgb(0 128 128 / 15%), 0 10px 10px -5px rgb(0 128 128 / 15%)'}
                            _hover={{ bg: '#20b2aa', }} _focus={{ bg: '#20b2aa', }} width={"150px"} colorScheme={"teal"} variant={"solid"}>Apply Now</Button>
                        <Flex direction={{base:"column", md:"row"}} alignItems={{base:"start", md:"center"}}>
                            <AvatarGroup size='md' max={3} mt={"30px"}>
                                <Avatar name='Sir Zia' src='images/sir-zia.jpg' />
                                <Avatar name='Sir Owais' src='images/Sir-Owais.jpg' />
                                <Avatar name='Huzaifa Irfan' src='images/huzaifa.png' />
                            </AvatarGroup>
                            <Text lineHeight={"7"} mt="7" ml={{base:"0", md:"5"}} fontSize={"17px"} fontWeight={"medium"} fontStyle={"italic"}>
                                Created By: {""}
                                <Link
                                    color={"teal"}
                                    target={"_blank"}
                                    href={"https://github.com/Huzaifa2199"}
                                >Huzaifa Irfan</Link>
                            </Text>
                        </Flex>
                    </Box>
                    <Box w={{ base: "100%", lg: "40%" }} pt={{base:"20px", lg:"40px"}}>
                        <Flex flex={1} alignItems={"end"} justify={{base:"center", lg:"end"}}>
                            <Image
                                // sizes='full'
                                src='images/Banner.png' />
                        </Flex>
                    </Box>
                </Stack>
            </Container>

        </Box>
    )
}
