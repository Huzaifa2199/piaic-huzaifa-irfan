"use client"
import { Box, Button, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export default function UltimateGoal() {
    return (
        <Box mx={"20px"}>
            <Container maxW={1200} bg={"#20b2aa"} px={{ base: "25px", lg: "50px" }} py={"25px"} borderRadius={"15px"}
                boxShadow={"0px 20px 25px -5px rgb(0 128 128 / 15%), 0px 10px 10px -5px rgb(0 128 128 / 15%)"}>
                <Stack direction={{ base: "column", lg: "row" }} alignItems={{ lg: "center" }}>
                    <Box>
                        <Heading fontSize={"40px"} color={"white"} pt={"15px"}>
                            Ultimate Goal
                        </Heading>
                        <Text lineHeight={"7"} my={"15px"} fontSize={"17px"} color={"white"}>
                            The mission of Panaverse is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies. Experts are calling this the 4th industrial revolution. We want Pakistan to become a global hub for AI, data science, cloud native computing, edge computing, blockchain, augmented reality, and internet of things.
                        </Text>
                    </Box>

                    <Box>
                        <Stack direction={{ base: "column", lg: "row" }} alignItems={{ lg: "center" }} justify={{ base: "start", lg: "end" }}>
                            <Heading fontSize={"65px"} color={"white"} mb={"10px"}>
                                100K
                            </Heading>
                            <Box>
                                <Stack direction={{ base: "row", lg: "column" }}>
                                    <Text fontSize={"18px"} color={"white"} fontWeight={"semibold"} mb={{ lg: "-5px" }}>
                                        Applications
                                    </Text>
                                    <Text fontSize={{ base: "18px", lg: "25px" }} color={"white"} fontWeight={"semibold"}>
                                        Recieved
                                    </Text>
                                </Stack>
                            </Box>
                        </Stack>
                        <Flex justify={{ base: "start", lg: "end" }}>
                            <Button
                                fontWeight={"bold"}
                                textColor={"#152D35"}
                                mt={"10px"}
                                mb={{base:"20px", lg:"0px"}}
                                boxShadow={'0px 1px 25px -5px rgb(0 128 128 / 15%), 0 10px 10px -5px rgb(0 128 128 / 15%)'}
                                _hover={{ bg: 'white', }}
                                _focus={{ bg: 'teal.100', }}
                                width={"225px"}
                                variant={"solid"}>
                                Offered Programs
                            </Button>
                        </Flex>
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}
