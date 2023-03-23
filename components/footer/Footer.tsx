"use client"
import React from 'react'
import { Box, Container, Link, SimpleGrid, Stack, Text, Image, Heading, HStack, }
    from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons'
import { FaBehanceSquare, FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";


export default function Footer() {
    return (
        <Box
            pt={"50px"}
            pb={"70px"}
            bg={"gray.100"}
            color={"#152D35"}
        >
            <Container as={Stack} maxW={1200}>
                <SimpleGrid
                    templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
                    spacing={8}>
                    <Stack spacing={6}>
                        <Box>
                            <Heading fontSize={"30px"}>Strategic Partners</Heading>
                            <Stack mt={"25px"} gap={"15px"} direction={{base:"column", lg:"row"}}>
                                <Image height={"50px"} width="min" src="images/PanacloudLogo.png" alt="Partner" />
                                <Image height={"50px"} width="min" src="images/SaylaniLogo.png" alt="Partner" />
                            </Stack>
                        </Box>
                        <Text fontSize={'sm'}>
                            © 2023 PIAIC. All rights reserved
                        </Text>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <Heading mb={"5px"} fontSize={"30px"}>Navigation</Heading>
                        <Link fontWeight={"semibold"} href={'#'}>Home</Link>
                        <Link fontWeight={"semibold"} href={'#'}>Programs</Link>
                        <Link fontWeight={"semibold"} href={'#'}>About Us</Link>
                        <Link fontWeight={"semibold"} href={'#'}>Contact Us</Link>
                        <Link fontWeight={"semibold"} href={'#'}>Apply Now</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <Heading mb={"5px"} fontSize={"30px"}>Support</Heading>
                        <Link fontWeight={"semibold"} href={'#'}>Help Center</Link>
                        <Link fontWeight={"semibold"} href={'#'}>Terms & Service</Link>
                        <Link fontWeight={"semibold"} href={'#'}>Legal</Link>
                        <Link fontWeight={"semibold"} href={'#'}>Privacy Policy</Link>
                        <Link fontWeight={"semibold"} href={'#'}>Timings</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <Heading mb={"5px"} fontSize={"30px"}>Contact</Heading>
                        <HStack>
                            <PhoneIcon w="15px" h="15px" color="#152D35" />
                            <Link fontWeight={"semibold"} href={'#'}>+92-308-2220203</Link>
                        </HStack>
                        <Box pt={"10px"}>
                            <HStack spacing={3}>
                                <FaBehanceSquare size={"30px"} color="#152D35"></FaBehanceSquare>
                                <FaTwitterSquare size={"30px"} color="#152D35"></FaTwitterSquare>
                                <FaFacebookSquare size={"30px"} color="#152D35"></FaFacebookSquare>
                                <FaLinkedin size={"30px"} color="#152D35"></FaLinkedin>
                            </HStack>
                        </Box>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    );
}