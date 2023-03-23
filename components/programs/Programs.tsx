"use client"
import { Box, Container, Heading, Link, Text, Icon, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import Aiicon from '@/app/icons/ai-icon'
import { Cloudnativeicon } from '@/app/icons/cloudnativeicon'
import { Metaverse } from '@/app/icons/metaverse'
import { Blockchainicon } from '@/app/icons/blockchainicon'

export default function Programs() {
    return (
        <Box px={"10px"} pt={"100px"} pb={"50px"}>
            <Container textAlign={"center"} justifyItems={"center"} maxW={800} textColor={"#152D35"}>
                <Heading fontSize={"40px"} color={"teal"}>
                    Offered Programs
                </Heading>
                <Text lineHeight={"7"} my={"15px"} fontSize={"17px"}>
                    In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program beginning. It resembles a cross between a corporate venture and an educational project.
                </Text>
            </Container>
            <Container maxW={1200} mt={"50px"}>
                <SimpleGrid columns={{base:1, md:2, lg:4}} spacing={5}>

                    {/* 1 */}
                    <Box px={"20px"} py={"40px"} overflow="hidden" border={'2px'} borderColor={'gray.100'}
                        boxShadow={"0px 20px 25px -20px rgba(0, 0, 0, 0.1), 0px 10px 10px 8px rgba(0, 0, 0, 0.03)"}
                        textColor={"#152D35"} rounded={"4px"}>
                        <Box mb={"20px"} ><Icon as={Aiicon} /></Box>
                        <Heading mb={"25px"} color={"teal"} size='md'>Artificial Intelligence</Heading>
                        <Text mb={"25px"} >A one year AI program designed for absolute beginenrs. Getting Pakistan ready for the new era of computing enabled by the rise of AI.</Text>
                        <Link fontSize={"17px"} fontWeight={"medium"}
                            color={"teal"}
                            target={"_blank"}
                            href={"#"}
                        >Learn More.. </Link>
                    </Box>

                    {/* 2 */}
                    <Box px={"20px"} py={"40px"} overflow="hidden" border={'2px'} borderColor={'gray.100'}
                        boxShadow={"0px 20px 25px -20px rgba(0, 0, 0, 0.1), 0px 10px 10px 8px rgba(0, 0, 0, 0.03)"}
                        textColor={"white"} bg={'#20b2aa'} rounded={"4px"}>
                        <Box mb={"20px"} ><Icon as={Cloudnativeicon} /></Box>
                        <Heading mb={"25px"} size='md'>Cloud Native Web</Heading>
                        <Text mb={"25px"} >A one year Cloud Native and Mobile Web computing program designed for absolute beginenrs. Getting Pakistan ready for the new era of microservices and multi-cloud native computing.</Text>
                        <Link fontSize={"17px"} fontWeight={"medium"}
                            target={"_blank"}
                            href={"#"}
                        >Learn More.. </Link>
                    </Box>

                    {/* 3 */}
                    <Box px={"20px"} py={"40px"} overflow="hidden" border={'2px'} borderColor={'gray.100'}
                        boxShadow={"0px 20px 25px -20px rgba(0, 0, 0, 0.1), 0px 10px 10px 8px rgba(0, 0, 0, 0.03)"}
                        textColor={"#152D35"} rounded={"4px"}>
                        <Box mb={"20px"} ><Icon as={Blockchainicon} /></Box>
                        <Heading mb={"25px"} color={"teal"} size='md'>Blockchain Specialist</Heading>
                        <Text mb={"25px"} >A one year Blockchain specialist program designed for absolute beginenrs. Getting Pakistan ready for the new era of Blockchain, Fintech and Smart Contracts.</Text>
                        <Link fontSize={"17px"} fontWeight={"medium"}
                            color={"teal"}
                            target={"_blank"}
                            href={"#"}
                        >Learn More.. </Link>
                    </Box>

                    {/* 4 */}
                    <Box px={"20px"} py={"40px"} overflow="hidden" border={'2px'} borderColor={'gray.100'}
                        boxShadow={"0px 20px 25px -20px rgba(0, 0, 0, 0.1), 0px 10px 10px 8px rgba(0, 0, 0, 0.03)"}
                        textColor={"#152D35"} rounded={"4px"}>
                        <Box mb={"20px"} ><Icon as={Metaverse} /></Box>
                        <Heading mb={"25px"} color={"teal"} size='md'>Metaverse and Web 3.0</Heading>
                        <Text mb={"25px"} >A one year Metaverse and Web 3.0 program designed for absolute beginenrs. Getting Pakistan ready for the new era of computing enabled by the rise of Web 3.0.</Text>
                        <Link fontSize={"17px"} fontWeight={"medium"}
                            color={"teal"}
                            target={"_blank"}
                            href={"#"}
                        >Learn More.. </Link>
                    </Box>
                </SimpleGrid>
            </Container>
        </Box>
    )
}
