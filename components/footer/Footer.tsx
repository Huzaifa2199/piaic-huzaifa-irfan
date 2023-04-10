"use client"
import React from 'react'
import { Box, Container, Link, SimpleGrid, Stack, Text, Image, Heading, HStack, } from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons'
import { FaFacebook, FaYoutube } from "react-icons/fa";


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
                            <Stack mt={"25px"} gap={"15px"} direction={{ base: "column", lg: "row" }}>
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
                        <Link fontWeight={"semibold"} href={'#programs'}>Programs</Link>
                        <Link fontWeight={"semibold"} href={'#about'}>About Us</Link>
                        <Link fontWeight={"semibold"} href={'https://www.piaic.org/'} target={"_blank"}>Apply Now </Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <Heading mb={"5px"} fontSize={"30px"}>Support</Heading>
                        <Link fontWeight={"semibold"} href={'#'}>Help Center</Link>
                        <Link fontWeight={"semibold"} href={'#'}>Terms & Service</Link>
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
                                <Link href='https://www.facebook.com/groups/piaic/' target={"_blank"}>
                                    <FaFacebook size={"30px"} color="#152D35"></FaFacebook>
                                </Link>
                                <Link href='https://www.youtube.com/channel/UC2Makv_pLAtvrjHNgg-pBLg' target={"_blank"}>
                                    <FaYoutube size={"30px"} color="#152D35"></FaYoutube>
                                </Link>
                            </HStack>
                        </Box>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box >
    );
}