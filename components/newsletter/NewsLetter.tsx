"use client"
import { Box, Button, Container, Flex, Heading, Input, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export default function NewsLetter() {
    return (
        <Box bg={"#20b2aa"}>
            <Container maxW={1200} py={"20px"}>
                <Flex direction={{base:"column", lg:"row"}} justifyContent={{lg:"space-between"}} alignItems={{lg:"center"}}>
                    <Box>
                        <Heading fontSize={"40px"} color={"white"} pt={"15px"}>
                            Join our Newsletter
                        </Heading>
                        <Text lineHeight={"7"} my={"15px"} fontSize={"17px"} color={"white"}>
                            Dont miss any more news and subscribe to our newsletter today.
                        </Text>
                    </Box>

                    <Box>
                        <Stack direction={{base:"column", lg:"row"}}>
                            <Input bg={"white"} placeholder='Enter your email'></Input>
                            <Button
                                fontWeight={"bold"}
                                textColor={"#152D35"}
                                mt={"10px"}
                                _hover={{ bg: 'white', }}
                                _focus={{ bg: 'teal.100', }}
                                width={"180px"}
                                variant={"solid"}>Submit
                            </Button>
                        </Stack>
                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}
