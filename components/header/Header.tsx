"use client"

import { Box, Button, Container, Flex, Hide, HStack, Image, List, ListItem, Show } from "@chakra-ui/react";
import React from 'react'
import Burger from "./Burger";

export default function Header() {
  return (
    <Box
      position="sticky" top={0} zIndex={10} bg={"white"}
      boxShadow={"0px 20px 25px -20px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"}
      pt={"5px"}
      pb={"5px"}
    >
      <Container maxW={1250} px={"20px"}>

        <Flex justifyContent={"space-between"} alignItems={"center"}>

          {/* left box */}
          <Box>
            <Image mb={"-40px"} height={"120px"} src="images/Logo.png" alt="Logo" />
          </Box>

          {/* Right box */}
          <Box>
            <HStack>
              <Hide below="md">
                <List>
                  <HStack spacing={"30px"} mr={"35px"} fontWeight={"bold"} textColor={"#152D35"}>
                    <ListItem textColor={'teal'}>Home</ListItem>
                    <ListItem>Programs</ListItem>
                    <ListItem>About Us</ListItem>
                    <ListItem>Contact Us</ListItem>
                  </HStack>
                </List>
                <Button
                  fontWeight={"bold"}
                  boxShadow={'0px 1px 25px -5px rgb(0 128 128 / 15%), 0 10px 10px -5px rgb(0 128 128 / 15%)'}
                  _hover={{ bg: '#20b2aa', }}
                  _focus={{ bg: '#20b2aa', }}
                  width={"150px"}
                  colorScheme={"teal"}
                  variant={"solid"}>Apply Now
                </Button>
              </Hide>

              <Show below="md">
                <Burger />
              </Show>

            </HStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
