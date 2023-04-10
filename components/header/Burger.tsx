import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    List,
    ListItem,
} from '@chakra-ui/react'

import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';


export default function Burger() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <GiHamburgerMenu color='teal' onClick={onOpen} size={"25px"} />
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton color={"teal"} size={"25px"} p="10px" mx="10px" mb="10px" mt="20px" />
                    <DrawerBody my="65px">
                        <List spacing={"30px"} mb={"30px"} fontWeight={"bold"} textColor={"#152D35"}>
                            <ListItem>
                                <a href="#" onClick={onClose}>
                                    Home
                                </a>
                            </ListItem>
                            <ListItem>
                                <a href="#programs" onClick={onClose}>
                                    Programs
                                </a>
                            </ListItem>
                            <ListItem>
                                <a href="#about" onClick={onClose}>
                                    About Us
                                </a>
                            </ListItem>
                        </List>
                        <Link href={"https://www.piaic.org/"} target={"_blank"}>
                            <Button
                                fontWeight={"bold"}
                                boxShadow={'0px 1px 25px -5px rgb(0 128 128 / 15%), 0 10px 10px -5px rgb(0 128 128 / 15%)'}
                                _hover={{ bg: '#20b2aa', }}
                                _focus={{ bg: '#20b2aa', }}
                                width={"150px"}
                                colorScheme={"teal"}
                                variant={"solid"}>Apply Now
                            </Button>
                        </Link>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}
